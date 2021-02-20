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
  
  
  
  
  
  
  
  
  // Get the modal
  var modal = document.getElementById("myPopup");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myiMage1");
  var img1 = document.getElementById("myiMage2");
  var img2 = document.getElementById("myiMage3");
  var img3 = document.getElementById("myiMage4");
  var img4 = document.getElementById("myiMage5");
  var img5 = document.getElementById("myiMage6");
  var img6 = document.getElementById("myiMage7");
  var img7 = document.getElementById("myiMage8");
  var img8 = document.getElementById("myiMage9");
  var img9 = document.getElementById("myiMage10");
  var img10 = document.getElementById("myiMage11");
  var img11= document.getElementById("myiMage12");
  var img12 = document.getElementById("myiMage13");
  var img13 = document.getElementById("myiMage14");
  var img14 = document.getElementById("myiMage15");
  var img15 = document.getElementById("myiMage16");
  var img16 = document.getElementById("myiMage17");
  var img17 = document.getElementById("myiMage18");
  // var imgx = document.getElementById("myI");
  var modalImg = document.getElementById("img001");
  var captionText = document.getElementById("capTion");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("cloSe")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }
      img12.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid1.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }
      img13.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid2.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }
      img14.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid3.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }
      img15.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid4.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }
      img16.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid5.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }
      img17.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/kid6.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }








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



ExistingCartNumbers();

function message(){
  alert('\n\nThankyou for supporting us... \n\nWe are happy to send you our news letter');
}
