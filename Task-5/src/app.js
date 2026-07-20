import { Router } from './router.js';
import { Navbar } from './components/Navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject persistent layout structures inside the window object framework wrapper
    document.getElementById('navbar-root').innerHTML = Navbar();
    
    // Instantiate internal routing mechanics mapping execution parameters
    Router.init();
});
