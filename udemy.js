const productpage= document.querySelector('.productPage');
const cartpage= document.querySelector('.cartPage');
const addToCartButton= document.querySelectorAll('.cartbutton');
const cartButton= document.getElementById('cart');
const keepshoppingbutton =document.getElementById('keepshopping');


cartButton.addEventListener('click', function(){
  cartpage.style.display ="block";
  productpage.style.display ="none";
});

keepshoppingbutton.addEventListener('click', function(){
  cartpage.style.display ="none";
  productpage.style.display ="block";
})