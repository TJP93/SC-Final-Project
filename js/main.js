/* insert interactivity here! */

const images = document.querySelectorAll(".carousel"); // all images for carousel in variable -- nodelist object to be iterated through by loop
let myTimer = setInterval(() => myCarousel(1), 5000); // inline function as setInterval issue with argument in function directly within, solved using variable

// variables for buttons & event listeners
const previousButton = document.querySelector('#prevbutton');
const pauseButton = document.querySelector('#pausebutton');
const resumeButton = document.querySelector('#resumebutton');
const nextButton = document.querySelector('#nextbutton');

 function resetTimer() {
    clearInterval(myTimer);
    myTimer = setInterval(() => myCarousel(1), 5000);
  }


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
      resetTimer();
  }
  //previous button
  if (arg < 0) {
  myVar--;
  if (myVar < 1) {myVar = images.length};
  images[myVar-1].style.display = "inline"; 
    resetTimer();
}

}

myCarousel(1); // call with argument 1 to set at image index 0

// event listener for button interactivity with keyboard

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
  if (event.code === "Enter") {

    resetTimer()
  }
}

// how to have spacebar work as both pause and resume button -- one for future?

// event listeners for clicking buttons - replaced onlick in html

previousButton.addEventListener('click', () => myCarousel(-1));

pauseButton.addEventListener('click', () => clearInterval(myTimer));

resumeButton.addEventListener('click', () => resetTimer());

nextButton.addEventListener('click', () => myCarousel(1));