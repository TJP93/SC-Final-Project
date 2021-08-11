/* insert interactivity here! */

window.addEventListener("load", () => {
  console.log("where to begin?")
})

const images = document.querySelectorAll(".carousel"); // all images for carousel in variable -- nodelist object to be iterated through by loop


let myVar = 0; // variable to manipulate images shown / restart carousel loop

function myCarousel(arg) {

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  if (arg > 0 ) {
    myVar++;
    if (myVar > images.length) {myVar = 1};
    images[myVar-1].style.display = "inline"; 
  }
if (arg < 0) {
  myVar--;
  if (myVar < 1) {myVar = images.length};
  images[myVar-1].style.display = "inline"; 
}
console.log(myVar);
}

myCarousel(1);

const myTimer = setInterval(() => myCarousel(1), 5000);


 /* function myCarousel(arg) {

 for (let i = 0; i < images.length; i++) {
    
   images[i].style.display = "none";}

  myVar++;

  if (myVar > images.length) {myVar = 1}

  images[myVar-1].style.display = "inline";   // block seemed to displace carousel and buttons?? 

  if (arg > images.length) {myVar = 1}

  console.log(myVar)

  if (arg < 1) {myVar = images.length} 
  
 }
  setInterval(myCarousel, 5000); // set to change image every 5 sec

 myCarousel(); // call */