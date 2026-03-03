// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Przykładowe produkty
const products = [
    { name: "Produkt A", price: "199 zł", img: "assets/product-a.jpg" },
    { name: "Produkt B", price: "299 zł", img: "assets/product-b.jpg" },
    { name: "Produkt C", price: "399 zł", img: "assets/product-c.jpg" },
    { name: "Produkt D", price: "499 zł", img: "assets/product-d.jpg" },
];

// Generowanie kart produktów
const productList = document.querySelector('.product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="kontakt.html" class="btn-contact">Kup teraz</a>
    `;
    productList.appendChild(card);
});
