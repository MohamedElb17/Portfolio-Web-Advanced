import { fetchProducts } from './api.js';
import { addToCart, updateCartDisplay } from './cart.js';
import { validateEmail } from './validemail.js';

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

async function displayProducts() {
    const products = await fetchProducts();
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">€ ${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}