import { products } from './products.js';

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const MAX_PRODUCTS = 2;


const clickCounts = {};

export function addToCart(id) {
  
    clickCounts[id] = clickCounts[id] ? clickCounts[id] + 1 : 1;

    
    if (clickCounts[id] >= MAX_PRODUCTS) {
        alert('Je hebt het maximale aantal producten in je winkelwagen bereikt voor dit product.');
        return; 
    }

   
    cartItems.push(id);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}

export function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}

export function updateCartDisplay() {
    const cartList = document.querySelector('.cart-items');
    cartList.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((itemId, index) => {
        const product = products.find(p => p.id == itemId);
        if (product) {
            totalPrice += product.price;
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - €${product.price}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(index));
            listItem.appendChild(removeButton);

            cartList.appendChild(listItem);
        }
    });

    const totalItem = document.createElement('li');
    totalItem.textContent = `Total: €${totalPrice.toFixed(2)}`;
    cartList.appendChild(totalItem);
}
