# Task 5: Full-Stack Deployment & Project Architecture (E-Commerce Catalog SPA)

A modern, high-performance Single Page Application (SPA) E-commerce product catalog engine built completely with vanilla JavaScript using zero third-party framework dependencies. This project handles client-side history navigation routes, features modular template injection rendering structures, and meets web accessibility and performance parameters.

## 🚀 Live Links
*   **Production Live Link:** `https://your-github-username.github.io/vanilla-js-capstone-engine/`
*   **Source Code Repository:** `https://github.com/your-github-username/vanilla-js-capstone-engine`

---

## 🛠️ Key Architectural Implementations

### 1. Custom SPA History Router Matrix
*   Intercepts click patterns targeting matching data references (`data-link`) using standard execution paths to rewrite local addresses without forcing a hard browser reload.
*   Employs advanced RegExp routing algorithms that parse out variable URL string structures (e.g., matching target element values from routes like `/product/:id`).

### 2. Micro-Component Layout Separation
*   Splits the frontend UI layout patterns into distinct functional modules including global core elements (`Navbar.js`), individual UI layouts (`ProductCard.js`), and view pipelines (`Home.js`, `Products.js`, `ProductDetail.js`).
*   Hydrates page states dynamically by implementing asynchronous network connections mapping from a clean simulated database JSON layer (`products.json`).

### 3. Production Resource Performance Optimizations
*   **Asset Efficiency Control:** Leverages `loading="lazy"` attributes on all layout product images, blocking non-critical image data from drawing bandwidth until scrolled into the viewport.
*   **Script Handling Routing:** Hooks the entire runtime logic to a single modern `<script type="module">` loader. This ensures deferred load execution and clean namespace isolation.
*   **Server Rewrite Paradigms:** Employs explicit routing overrides via a target `vercel.json` structure profile, keeping deep nested route paths fully operational across page flushes and preventing 404 breaks on reload.

---

## 📂 File Architecture
```text
vanilla-js-capstone-engine/
├── public/
│   └── data/
│       └── products.json   # Mock Database Payload API
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Shared Component: Header & Navigation Matrix
│   │   └── ProductCard.js  # Reusable Component: Catalog Card Layout
│   ├── pages/
│   │   ├── Home.js         # Page Module: Hero & Showcase Entrance
│   │   ├── Products.js     # Page Module: Dynamic Grid Hydration
│   │   └── ProductDetail.js# Page Module: Asynchronous Individual Specs View
│   ├── router.js           # Client-Side SPA Routing Engine
│   └── app.js              # Central Bootstrapper Orchestrator
├── index.html              # Shell Layout Master Container
└── style.css               # Responsive Layout Theme Core
