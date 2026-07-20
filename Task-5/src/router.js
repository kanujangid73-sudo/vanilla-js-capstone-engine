import { Home } from './pages/Home.js';
import { Products } from './pages/Products.js';
import { ProductDetail } from './pages/ProductDetail.js';

const routes = {
    '/': Home,
    '/products': Products,
    '/product/:id': ProductDetail
};

export class Router {
    static init() {
        // Intercept global anchors to execute client-side path handling
        document.body.addEventListener('click', e => {
            const anchor = e.target.closest('a[data-link]');
            if (anchor) {
                e.preventDefault();
                this.navigateTo(anchor.getAttribute('href'));
            }
        });

        // Track native hardware backward/forward page movements
        window.addEventListener('popstate', () => this.route());
        
        // Boot the router engine immediately
        this.route();
    }

    static navigateTo(url) {
        history.pushState(null, null, url);
        this.route();
    }

    static async route() {
        const path = window.location.pathname;
        const appRoot = document.getElementById('app-root');
        
        // Structural regex execution mapping for variable paths (e.g., /product/1)
        let matchedRoute = routes[path];
        let params = {};

        if (!matchedRoute) {
            const dynamicKeys = Object.keys(routes).find(key => key.includes('/:'));
            if (dynamicKeys) {
                const regexPattern = new RegExp("^" + dynamicKeys.replace(/:[^\s/]+/g, "([^\\s/]+)") + "$");
                const matchResults = path.match(regexPattern);
                if (matchResults) {
                    matchedRoute = routes[dynamicKeys];
                    const paramName = dynamicKeys.split('/:')[1];
                    params[paramName] = matchResults[1];
                }
            }
        }

        // Fallback route boundary pattern matching (404 prevention redirection)
        if (!matchedRoute) {
            appRoot.innerHTML = `<section style='padding:2rem;'><h1>404 Page Error</h1><p>The requested route matrix was not discovered.</p></section>`;
            return;
        }

        // Hydrate data into views asynchronously and enforce screen reader focus loops
        appRoot.innerHTML = await matchedRoute(params);
        appRoot.focus();
    }
}