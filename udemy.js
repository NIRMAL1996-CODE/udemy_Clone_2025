const productpage= document.querySelector('.productPage');
const cartpage= document.querySelector('.cartPage');
const addToCartButton= document.querySelectorAll('.cartbutton');
const cartButton= document.getElementById('cart');
const keepshoppingbutton =document.getElementById('keepshopping');
const cartItemsContainer = document.querySelector('.cart-items');

//cartbutton opens cart page
cartButton.addEventListener('click', function(){
  cartpage.style.display ="block";
  productpage.style.display ="none";
  displayCartItems();
});
//keepshopping button opens product page
keepshoppingbutton.addEventListener('click', function(){
  cartpage.style.display ="none";
  productpage.style.display ="block";
});
//updates the cart and if no products is there , tells that cart is empty
function displayCartItems(){
  cartItemsContainer.innerHTML = '';
  if(cart.length===0){
    localStorage.removeItem('cart');
    cartItemsContainer.innerHTML ='<p>Your cart is empty. Keep shopping to find a course!</p>';
     }
};


addToCartButton.forEach((button)=>{
  button.addEventListener('click', function(){
    const productName = button.parentElement.querySelector('h2').innerText;
    const productPrice = button.parentElement.querySelector('p').innerText.split(": ")[1];
    const productImageSrc = button.parentElement.querySelector('img').src;
    
    const cartProductData = {
      name: productName,
      price: productPrice,
      quantity: 1,
      image: productImageSrc
    };

    let existingCartData = JSON.parse(localStorage.getItem("cart")) || [];
      existingCartData.push(cartProductData);
      localStorage.setItem("cart", JSON.stringify(existingCartData));
      alert(`${productName} has been added to your cart!`);
  });
});

