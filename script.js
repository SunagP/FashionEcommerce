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

// slide();

var modal1=document.getElementById("myModal1");
var modal2=document.getElementById("myModal2");

var btn1=document.getElementById("myBtn1");
var btn2=document.getElementById("myBtn2");

var span1=document.getElementsByClassName("close1")[0];
var span2=document.getElementsByClassName("close2")[0];
var cart = document.getElementsByName("add");

var carticon= document.getElementById("carticon");

var count=0;

let carts=document.getElementsByClassName("add-cart");

btn1.onclick=function(){
  modal1.style.display="block";
}
btn2.onclick=function(){
  modal2.style.display="block";
}

span1.onclick=function(){
  modal1.style.display="none";
}
span2.onclick=function(){
  modal2.style.display="none";
}

window.onclick=function(event){
  if(event.target==modal1){
    modal1.style.display="none";
  }
}
window.onclick=function(event){
  if(event.target==modal2){
    modal2.style.display="none";
  }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


function ExistingCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

ExistingCartNumbers();
slide();

function message(){
  alert('\n\nThankyou for supporting us... \n\nWe are happy to send you our news letter');
}
