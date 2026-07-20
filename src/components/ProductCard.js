export function ProductCard(product) {
    return `
        <article class="product-card">
            <img src="${product.image}" alt="Product close up display asset for ${product.title}" loading="lazy" class="product-img">
            <div class="card-details">
                <h3>${product.title}</h3>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <p class="product-desc-truncate">${product.description.substring(0, 75)}...</p>
                <a href="/product/${product.id}" class="cta-btn" data-link aria-label="View technical specifications regarding ${product.title}">Details Matrix</a>
            </div>
        </article>
    `;
}