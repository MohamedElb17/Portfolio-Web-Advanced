import { products } from './products.js';


let productNamen = products.map(({ name }) => name); // Destructuring


let productPrijzen = [...products.map(({ price }) => price)]; // Spread operator


let totalePrijs = products.reduce((total, { price }) => total + price, 0); // Consumer method (reduce)


console.log('Productnamen:', productNamen);
console.log('Productprijzen:', productPrijzen);
console.log('Totale prijs van alle producten:', totalePrijs.toFixed(2));
