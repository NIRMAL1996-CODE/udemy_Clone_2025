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

// addToCartButton.forEach((button, index)=>{
// button.addEventListener('click', function(){
//   cart.push(products[index]);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${products[index].name} has been added to your cart!`);
// });
// });

const cart = JSON.parse(localStorage.getItem('cart')) || [];

 cartButton.addEventListener('click', function(){
   cartpage.style.display ="block";
  productpage.style.display ="none";
  displayCartItems();
});

function displayCartItems(){
  cartItemsContainer.innerHTML = '';
  if(cart.length===0){
    localStorage.removeItem('cart');
    cartItemsContainer.innerHTML ='<p>Your cart is empty. Keep shopping to find a course!</p>';
  }
};
keepshoppingbutton.addEventListener('click', function(){
  cartpage.style.display ="none";
  productpage.style.display ="block";
});

// addToCartButton.forEach((button, index)=>{
//   button.addEventListener('click', function(){
//     const productName = button.parentElement.children[1].innerText;
//     const productPrice = button.parentElement.children[2].innerText.split(": ")[1];
//     const productImageSrc = button.parentElement.children[0].src;
//     const cartProductData = {
//       name: productName,price: productPrice, quantity: 1, image: productImageSrc
//     }
//     let existingCartData = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
//     existingCartData.push(cartProductData);
//     localStorage.setItem("cart", JSON.stringify(existingCartData));
//     alert(`${products[index].name} has been added to your cart!`);
//   });
//   });

