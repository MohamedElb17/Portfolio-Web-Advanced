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


function setupEventListeners() {
    document.querySelector('.product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = e.target.dataset.id;
            addToCart(id);
        }
    });



    document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    
}