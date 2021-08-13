/* insert interactivity here! */

window.addEventListener("load", () => {
  console.log("where to begin?")
})

const images = document.querySelectorAll(".carousel"); // all images for carousel in variable -- nodelist object to be iterated through by loop
const myTimer = setInterval(() => myCarousel(1), 5000); // inline function as setInterval issue with argument in function directly within, solved using variable

 /*function stopTimer() {
  if (myTimer) {
    clearInterval(myTimer);
  }
  
    myTimer = setInterval(() => myCarousel(1), 5000);
  }
*/

let myVar = 0; // variable to manipulate images shown / restart carousel loop

function myCarousel(arg) {

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
// next button & auto looping
  if (arg > 0 ) {
    myVar++;
    if (myVar > images.length) {myVar = 1};
    images[myVar-1].style.display = "inline"; 
  }
  //previous button
if (arg < 0) {
  myVar--;
  if (myVar < 1) {myVar = images.length};
  images[myVar-1].style.display = "inline"; 
}

}

myCarousel(1); // call with argument 1 to set at image index 0



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