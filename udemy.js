const productpage= document.querySelector('.productPage');
const cartpage= document.querySelector('.cartPage');
const addToCartButton= document.querySelectorAll('.cartbutton');
const cartButton= document.getElementById('cart');
const keepshoppingbutton =document.getElementById('keepshopping');
const cartItemsContainer = document.querySelector('.cart-items');

const products= [
{name: "Web Development Bootcamp",price: 500, quantity: 0},
{ name:"Computer Basics", price: 899, quantity: 0},
{ name:"The complete JavaScript Course", price: 500, quantity: 0},
{ name:"Computer Basics & Excel Analytics", price: 1500, quantity: 0}
];

addToCartButton.forEach((button, index)=>{
button.addEventListener('click', function(){
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${products[index].name} has been added to your cart!`);
});
});

const cart = JSON.parse(localStorage.getItem('cart')) || [];
 cartButton.addEventListener('click', function(){
   cartpage.style.display ="block";
  productpage.style.display ="none";
});

keepshoppingbutton.addEventListener('click', function(){
  cartpage.style.display ="none";
  productpage.style.display ="block";
});
