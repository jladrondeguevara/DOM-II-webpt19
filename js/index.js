//when clicking on the header, the font will turn red.
const header = document.querySelector(".logo-heading");

header.addEventListener('click', () => {
    header.style.color = "red";
});


//when doubleclicking the image, it will display the word "fun"

let busImg = document.querySelector("img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(.8)"
})