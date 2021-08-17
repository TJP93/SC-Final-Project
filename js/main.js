/* insert interactivity here! */

const images = document.querySelectorAll(".carousel"); // all images for carousel in variable -- nodelist object to be iterated through by loop
const myTimer = setInterval(() => myCarousel(1), 5000); // inline function as setInterval issue with argument in function directly within, solved using variable

 /*function resetTimer() {
    clearInterval(myTimer);
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

document.addEventListener("keydown", myKeys); // works, but double check why event.key did not work, but event.code did?

function myKeys(event) {

  if (event.code === "ArrowRight" ) {

    myCarousel(1);
  }

  if (event.code === "ArrowLeft") {

    myCarousel(-1);
  }

  if (event.code === "Space") {

    clearInterval(myTimer);
  }
}