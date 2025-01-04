function show() {
    var product = document.getElementById('cart');
    product.style.display = "block";
    product.className = "cart";
}
const cart = {};
function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.className = "cart-item"
        listItem.innerText = `${product} ,  Quantity: ${cart[product].quantity} ,  Total Price: Rs${cart[product].totalPrice}`;
        cartList.appendChild(listItem);
    }
}
const slide1 = document.getElementById("slider1");
const slide2 = document.getElementById("slider2");
slide2.style.display = "none"
    

function next(){
     slide2.style.display = "flex"
    slide1.style.display = "none"
   
}
function previous(){
 slide1.style.display = "flex"
    slide2.style.display = "none"
}

 // Toggle button functionality
 const toggleButton = document.getElementById('toggle-btn');
 const navMenu = document.getElementById('nav-menu');
 toggleButton.addEventListener('click', () => {
     navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
 });