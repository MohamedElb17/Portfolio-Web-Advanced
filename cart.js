import { products } from './products.js';


let cartItems = JSON.parse(localStorage.getItem('cart')) || []; //Gebruik van LocalStorage
const MAX_PRODUCTS = 2; //Gebruiken van een constante



let clickCounts = {};

export function addToCart(id) {
  
    clickCounts[id] = clickCounts[id] ? clickCounts[id] + 1 : 1;

    
    if (clickCounts[id] >= MAX_PRODUCTS) {
        alert('Je hebt het maximale aantal producten in je winkelwagen bereikt voor dit product.');
        return; 
    }

   
    cartItems.push(id);
    localStorage.setItem('cart', JSON.stringify(cartItems)); //Gebruik van LocalStorage
    updateCartDisplay();
}

export function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}//JSON manipuleren en weergeven

export function updateCartDisplay() { //Callback Function
    let cartList = document.querySelector('.cart-items'); //Elementen selecteren
    cartList.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((itemId, index) => { // Arrow function
        let product = products.find(p => p.id == itemId);
        if (product) {
            totalPrice += product.price;
            let listItem = document.createElement('li'); //elementen manipuleren
            listItem.textContent = `${product.name} - €${product.price}`;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(index)); //Event aan een element koppelen
            listItem.appendChild(removeButton);

            cartList.appendChild(listItem);
        }
    });

    

    let totalItem = document.createElement('li');
    totalItem.textContent = `Total: €${totalPrice.toFixed(2)}`;
    cartList.appendChild(totalItem);




}

updateCartDisplay();


