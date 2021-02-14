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
  
  img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men1.webp";
      captionText.innerHTML = "Vythiri is a small town of Kerala listed as favorite tourist places of the state. This loveliest hill station lies in the Wayanad region popular as a green paradise. However, you must cover the 90 km distance from the seashores of another best tourist place Kozhikode. If we talk about the Wayanad the name has been delivered from the two different words Vayal and Nadu which means land of paddy fields. Vythiri is the astonishing hill station and a key place for tea, coffee and spice plantations. This unpolluted place consists of luxuriant greenery and the best view of hills. The view is breathtaking from Vythiri and the finest part is you can have the guesthouse in the center part of the town. ";
  }
  img1.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men2.webp";
      captionText.innerHTML = "Karnataka is a big state captivating huge land with complete charming beauty. Karnataka state is wealthy in flora & fauna, and it has spectacle pomp of magnificent customs with wonders of modern industry of Engineering.  The novel strategy of the State Cabinet allows a tourist to visit attractive places with complete guide packages. Because of such a reason private sector has appeared with novel plans containing offers and contributions with government land to industrialists at 50 % market value.  These sectors are founding resorts and managements center of guest houses of government.";
  }
  img2.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men3.webp";
      captionText.innerHTML = "Mawsynram is only 16 km away from Cherrapunji that means you are getting two amazing places to visit if you plan holidays to Mawsynram town. You can also attain to Khasi Hills once you reach the village. Well Maw means stone which states that town is covered with rock hills area. It's not highly developed spot and that is the reason that you will find the natural beauty places in a town. In the last few years the tourism is improved in Meghalaya state and that affected this town too. Today some big resorts and hotels are available in Mawsynram town as accommodation. Your worry about booking is solved because some of the tourist companies are providing online booking for Mawsynram. You can select the package according budget and can enjoy this wonder land of North East India.  Experts suggest this place as nature lover destination so if you are bored from the regular lifestyle or want to make your vacation memorable and then hit the town with your entry.";
  }
  img3.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men4.webp";
      captionText.innerHTML = "Mawsynram is only 16 km away from Cherrapunji that means you are getting two amazing places to visit if you plan holidays to Mawsynram town. You can also attain to Khasi Hills once you reach the village. Well Maw means stone which states that town is covered with rock hills area. It's not highly developed spot and that is the reason that you will find the natural beauty places in a town. In the last few years the tourism is improved in Meghalaya state and that affected this town too. Today some big resorts and hotels are available in Mawsynram town as accommodation. Your worry about booking is solved because some of the tourist companies are providing online booking for Mawsynram. You can select the package according budget and can enjoy this wonder land of North East India.  Experts suggest this place as nature lover destination so if you are bored from the regular lifestyle or want to make your vacation memorable and then hit the town with your entry.";
  }
  img4.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men5.webp";
      captionText.innerHTML = "Mawsynram is only 16 km away from Cherrapunji that means you are getting two amazing places to visit if you plan holidays to Mawsynram town. You can also attain to Khasi Hills once you reach the village. Well Maw means stone which states that town is covered with rock hills area. It's not highly developed spot and that is the reason that you will find the natural beauty places in a town. In the last few years the tourism is improved in Meghalaya state and that affected this town too. Today some big resorts and hotels are available in Mawsynram town as accommodation. Your worry about booking is solved because some of the tourist companies are providing online booking for Mawsynram. You can select the package according budget and can enjoy this wonder land of North East India.  Experts suggest this place as nature lover destination so if you are bored from the regular lifestyle or want to make your vacation memorable and then hit the town with your entry.";
  }
      img5.onclick = function() {
      modal.style.display = "block";
      modalImg.src = "img/men6.webp";
      captionText.innerHTML = "A famous city Kolhapur is our target of the day. Kolhapur is the historical metropolis located on the bank of Panchganga River, Maharashtra, India. The striking temples, palaces and gardens are main attractions of the city. Kolhapur is having religious values for Indians.City was found by Chhatra Pati Tarabai and most successful ruler for the city was legend Shri Shahu Ji Maharaj and Shri Rajaram Ji. Amba Bai Temple is main shrine of the town and millions of pilgrims reach the temple every years. Dakshin Kashi is another name of the city. The unbelievable archeological and traditional heritage of the city makes it first choice for the voyagers. Kolhapuri Chappal and Jaggery are famous in the world.";
  }





let carts = document.querySelectorAll(".add-cart");

let products = [
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



ExistingCartNumbers();
