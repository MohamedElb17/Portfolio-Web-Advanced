#Portfolio Web Advanced "Gaming Store" 

Dit is mijn portfolio voor het vak Web Advanced, waarin ik een Gaming Store heb ontwikkeld met behulp van HTML, CSS en JavaScript.

De website die ik heb gemaakt, biedt een eenvoudige e-commerce ervaring. Gebruikers kunnen producten bekijken en toevoegen aan hun winkelwagen, zich inschrijven voor een nieuwsbrief, en de winkelwageninhoud beheren. 


- Elementen selecteren: 

Met document.querySelector en .getElementById heb ik HTML elementen kunnen selecteren.

In bestand : app.js, cart.js en emailform.js 

-----------------------------------------------------

- Elementen manipuleren

Nieuwe elementen worden gemaakt en toegevoegd aan de pagina, of bestaande elementen worden gewijzigd.

In bestand: app.js en cart.js

-----------------------------------------------------

- Event aan een element koppelen

Event listeners worden toegevoegd aan elementen om interacties zoals klikken of indienen van een formulier.

In bestand: app.js, emailform,js en cart.js

-----------------------------------------------------

- Formulier valideren

Formulierinvoer wordt gecontroleerd en gevalideerd, fouten worden weergegeven.

In bestand: emailform.js en validemail.js

-----------------------------------------------------

- Gebruiken van een constante

Een constante waarde wordt gebruikt om het maximale aantal producten in de winkelwagen te beperken.

In bestand: cart.js

-----------------------------------------------------

- Gebruiken van template literals

Gebruik van backticks om een string met ingesloten expressies te maken.

In bestand: app.js

-----------------------------------------------------

- Destructuring

Destructuring gebruiken om specifieke eigenschappen uit de productobjecten te halen.

In bestand: productbeheer.js

-----------------------------------------------------

- Spread & Rest operator

een nieuwe array word gemaakt met alle productprijzen.

In bestand productbeheer.js

-----------------------------------------------------

- Iteration over een array

Itereert over de array van producten en voert een actie uit voor elk product.

In bestand app.js en cart.js

-----------------------------------------------------

- Arrow function / Callback Function

De arrowfunctie wordt gebruikt om een callbackfunctie te definiëren die wordt doorgegeven aan de forEach-methode. Deze arrowfunctie wordt uitgevoerd voor elk element in de cartItems array.

In bestand cart.js

-----------------------------------------------------

- Callback function

In bestand cart.js, app,js en validemail.js

-----------------------------------------------------

- Promise

Er wordt een Promise gebruikt om de lijst van producten na een vertraging van 1 seconde te retourneren.

In bestand api.js

-----------------------------------------------------

- Consumer Method

Wordt gebruikt om door de producten te itereren en een totale prijs te berekenen.

In bestand productbeheer.js

-----------------------------------------------------

- Async & Await

 in deze functie wordt de async gebruikt om aan te geven dat de functie asynchroon is. Het await wordt gebruikt om te wachten tot de fetchProducts() functie klaar is met het ophalen van de producten voordat de rest van de code wordt uitgevoerd.

 In bestand app.js en api.js

-----------------------------------------------------

- Self executing function

De self-executing function die wordt gebruikt in het app.js bestand met behulp van DOMContentLoaded-gebeurtenis zorgt ervoor dat bepaalde taken worden uitgevoerd zodra de DOM volledig is geladen.

In bestand: app.js

-----------------------------------------------------

- Fetch om data op te halen

Gebruik van een fetch functie om productgegevens op te halen.

In bestand: app.js en api.js

-----------------------------------------------------

- JSON manipuleren en weergeven

 In de products.js bestand worden productgegevens opgeslagen in de vorm van een JSON-array. Deze gegevens weergeven producten in de productlijst. (in cart.js)

 In bestand: products.js en cart.js

-----------------------------------------------------

 - Basis CSS Animatie

 Deze CSS-animaties zorgen voor een eenvoudige animatie wanneer de gebruiker met de muis over een productitem gaat. De transform-eigenschap veroorzaakt een verschuiving naar boven en de box-shadow-eigenschap zorgt voor een schaduweffect.

 In bestand stijl.css :  .product-item, .product-item:hover, button.add-to-cart button, .add-to-cart:hover en .main-image:hover. 

-----------------------------------------------------

- Gebruiken van een flexbox of CSS grid

  Door display: flex toe te passen, kunnen de producten worden gerangschikt in een flexibele rij.

  In bestand stijl.css: .product-list

-----------------------------------------------------

- Gebruik van LocalStorage

De LocalStorage wordt gebruikt om de inhoud van de winkelwagen op te slaan. De localStorage.getItem wordt gebruikt om de opgeslagen gegevens op te halen, die vervolgens worden geparseerd met JSON.parse

In bestand cart.js



