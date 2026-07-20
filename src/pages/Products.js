import { ProductCard } from '../components/ProductCard.js';

export async function Products() {
    try {
        const res = await fetch('/public/data/products.json');
        if (!res.ok) throw new Error("Catalog fetch payload failure.");
        const productsList = await res.json();

        const cardsMarkup = productsList.map(item => ProductCard(item)).join('');

        return `
            <section class="catalog-view">
                <h2>Product Index Catalog</h2>
                <p class="catalog-subtitle">Hydrating direct client components live from the mock local dataset register.</p>
                <div class="catalog-grid">${cardsMarkup}</div>
            </section>
        `;
    } catch (err) {
        return `<div class="error-view"><p>Error mapping catalog indexes: ${err.message}</p></div>`;
    }
}