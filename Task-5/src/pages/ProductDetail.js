export async function ProductDetail(params) {
    try {
        const res = await fetch('/public/data/products.json');
        const items = await res.json();
        const targetedItem = items.find(p => p.id === params.id);

        if (!targetedItem) {
            return `<div class="error-view"><h2>Product Missing</h2><p>The system failed to discover item references matching ID: ${params.id}</p></div>`;
        }

        return `
            <section class="detail-layout">
                <a href="/products" class="back-link" data-link>&larr; Return to Active Catalog</a>
                <div class="detail-split">
                    <div class="image-wrapper">
                        <img src="${targetedItem.image}" alt="Expanded profile visual for ${targetedItem.title}">
                    </div>
                    <div class="specs-content">
                        <h1>${targetedItem.title}</h1>
                        <span class="category-tag">${targetedItem.category}</span>
                        <div class="price-tier">$${targetedItem.price.toFixed(2)}</div>
                        <p class="detailed-description">${targetedItem.description}</p>
                        <button type="button" class="purchase-btn" onclick="alert('Item successfully added to imaginary cart pipeline!')">Add Selection To Order</button>
                    </div>
                </div>
            </section>
        `;
    } catch (err) {
        return `<div class="error-view"><p>Failure mapping item variables: ${err.message}</p></div>`;
    }
}