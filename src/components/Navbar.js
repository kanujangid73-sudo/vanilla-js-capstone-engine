export function Navbar() {
    return `
        <header class="global-navbar">
            <div class="logo">
                <a href="/" data-link aria-label="NexStore Home Marketplace">NexStore<span>.io</span></a>
            </div>
            <nav aria-label="E-commerce Shell Navigation Matrix">
                <ul class="nav-links">
                    <li><a href="/" data-link>Home</a></li>
                    <li><a href="/products" data-link>Catalog</a></li>
                </ul>
            </nav>
        </header>
    `;
}