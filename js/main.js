/* insert interactivity here! */

window.addEventListener("load", () => {
  console.log("where to begin?")
})

const images = document.querySelectorAll(".carousel"); // all images for carousel in variable -- nodelist object to be iterated through by loop


let imageNumber = 0; // variable to manipulate images shown


function myCarousel() {

  for (let i = 0; i < images.length; i++) {
    
    images[i].style.display = "none";}

  imageNumber++;

  if (imageNumber > images.length) {imageNumber = 1}

  images[imageNumber-1].style.display = "block";

  
}
setInterval(myCarousel, 5000); // set to change image every 5 sec

myCarousel(); // call