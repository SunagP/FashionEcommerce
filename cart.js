const slide=()=>{
    const lines=document.querySelector('.lines');
    const list=document.querySelector('.list');       /*selects first occurance*/
    const list2=document.querySelectorAll('.list a');  /*selects all occurances*/
    lines.addEventListener('click',()=>{
        list.classList.toggle('lines2');
        list2.forEach((a,index)=>{
           if( a.style.animation){
            a.style.animation=``;
           }
           else
           {
            a.style.animation=`list2Fade 0.5s ease forwards ${index/7 + 0.5}s`;
           }
            // console.log(index);
        });
        lines.classList.toggle('cross');
    });
   
  
    
  }
  slide();




let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Boys 2-Pack Printed T-shirts",
    brand: "H&M",
    tag: "kid1",
    price: 799,
    inCart: 0,

  },
  {
    name: "Boys Blue & Yellow Colourblocked Round Neck T-shirt",
    brand: "Cherry Crumble",
    tag: "kid2",
    price: 899,
    inCart: 0,
  },
  {
    name: "Boys Yellow & Blue Embroidered Kurta with Dhoti Pants",
    brand: "ahhaaaa",
    tag: "kid3",
    price: 1290,
    inCart: 0,
  },
  {
    name: "Boys Maroon & White Striped Cotton Kurta with Churidar",
    brand: "JBN Creation",
    tag: "kid4",
    price: 890,
    inCart: 0,
  },
  {
    name: "Girls Pink & Navy Blue Solid T-shirt with Shorts",
    brand: "CUTECUMBER",
    tag: "kid5",
    price: 990,
    inCart: 0,
  },
  {
    name: "Girls Navy Blue & Pink Printed 2-Piece Jersey Set",
    brand: "H&M",
    tag: "kid6",
    price: 690,
    inCart: 0,
  },
  {
    name: "Men Mustard Orange & Green Bagru Printed Straight Kurta with Roll-Up Sleeves",
    brand: "Taavi",
    tag: "men3",
    price: 2099,
    inCart: 0,
  },
  {
    name: "Men Blue Regular Fit Printed Casual Shirt",
    brand: "Roadster",
    tag: "men1",
    price: 2839,
    inCart: 0,
  },
  {
    name: "Men Burgundy Slim Fit Solid Smart Casual Shirt",
    brand: "Indian Terrain",
    tag: "men2",
    price: 21990,
    inCart: 0,
  },
  {
    name: "Men White & Grey Printed Straight Kurta",
    brand: "House of Pataudi",
    tag: "men4",
    price: 2199,
    inCart: 0,
  },
  {
    name: "Men Orange & White Printed Rain Jacket",
    brand: "Sports52 wear",
    tag: "men5",
    price: 2199,
    inCart: 0,
  },
  {
    name: "Men Grey & Green Waterproof Reversible Seam Sealed Rain Jacket",
    brand:"t-base",
    tag: "men6",
    price: 2199,
    inCart: 0,
  },
  {
    name: "women Yellow & Green Floral Print Straight Kurta",
    brand: "Varanga",
    tag: "women2",
    price: 799,
    inCart: 0,
  },
  {
    name: "Women Teal Blue & White Printed Kurta with Palazzos",
    brand: "Anubhutee",
    tag: "women1",
    price: 999,
    inCart: 0,
  },
  {
    name: "White Embroidered Linen Blend Saree",
    brand: "GoSriKi",
    tag: "women3",
    price: 1290,
    inCart: 0,
  },
  {
    name: "Pink & Blue Jute Cotton Embroidered Saree",
    brand: "The Chennai Silks",
    tag: "women4",
    price: 2290,
    inCart: 0,
  },
  {
    name: "Women Blue Boyfriend Fit Stretchable Jeans",
    brand: "ether",
    tag: "women5",
    price: 990,
    inCart: 0,
  },
  {
    name: "Women Black Slim Fit Mid-Rise Clean Look Stretchable Cropped Jean",
    brand:"SASSAFRAS",
    tag: "women6",
    price: 1190,
    inCart: 0,
  }
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function ExistingCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
    }
  else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems =  {
        ...cartItems,
        [product.name]: product,
      } 
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


function totalCost( product, action ) {
  let cart = localStorage.getItem("totalCost");

  if( action) {
      cart = parseInt(cart);

      localStorage.setItem("totalCost", cart - product.price);
  } else if(cart != null) {
      
      cart = parseInt(cart);
      localStorage.setItem("totalCost", cart + product.price);
  
  } else {
      localStorage.setItem("totalCost", product.price);
  }
}


function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");


  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./img/${item.tag}.webp" width=35% height=55%>
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">${item.inCart}</div>
            <div class="cost">
                ₹${item.inCart * item.price}
            </div>
            `
    });
    productContainer.innerHTML +=`
      <div class="basketContainer">
        <h4 class="basketTotalTitle">
          BasketTotal:
        </h4>
        <h4 class="basketTotal">
         ₹${cartCost}
        </h4>
    `;
  
  deleteButtons();
  
  }
}


function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.product ion-icon');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  console.log(cartItems);

  for(let i=0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', () => {
          productName = deleteButtons[i].parentElement.textContent.replace(/ /g,' ').trim();
         
          localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
          localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

          delete cartItems[productName];
          localStorage.setItem('productsInCart', JSON.stringify(cartItems));

          displayCart();
          ExistingCartNumbers();
      })
  }
}

ExistingCartNumbers();
displayCart();