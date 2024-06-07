import { fetchProducts } from './api.js';
import { addToCart, updateCartDisplay } from './cart.js';
import { validateEmail } from './validemail.js';

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

async function displayProducts() {
    let products = await fetchProducts();
    let productList = document.querySelector('.product-list'); //Elementen selecteren
    products.forEach(product => {
        let productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">€ ${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `; //Gebruiken van template literals
        productList.appendChild(productItem);
    });
}


function setupEventListeners() {
    document.querySelector('.product-list').addEventListener('click', (e) => { //Event aan een element koppelen
        if (e.target.classList.contains('add-to-cart')) {
            let id = e.target.dataset.id;
            addToCart(id);
        }
    });



    document.querySelector('#newsletter-form').addEventListener('submit', (e) => { //Event aan een element koppelen
        e.preventDefault();
        let email = document.querySelector('#email').value;
        if (validateEmail(email)) {
            alert('Subscribed!');
        } else {
            alert('not valid email adress');
        }
    });

    
}