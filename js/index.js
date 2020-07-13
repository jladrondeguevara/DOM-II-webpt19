//when clicking on the header, the font will turn red.
const header = document.querySelector(".logo-heading");

header.addEventListener('click', () => {
    header.style.color = "red";
});


//when hovering over bus image, create emphasis

let busImg = document.querySelector("img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.2)"
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)"
})

//when resizing, background turns gray

let body = document.querySelector("body")

window.addEventListener("resize", () => {
    body.style.backgroundColor = "gray";
})

//when pressing any key, resizes the bus image

document.addEventListener("keydown", event => {
    if(event.isComposing || event.keyCode === 229){
        return;
    } else if(event.keyCode===65) {
        busImg.style.transform = "scale(.5)";
    }
})

//when scrolling, nav bar color changes
let lastPosition = 0;
let counter = false;
const headerContainer = document.querySelector(".main-navigation");
function changeHeaderColor(scrollPosition) {
    if(lastPosition >= 500){
        headerContainer.style.backgroundColor = "lightblue";
    }
}

window.addEventListener('scroll', e => {
    lastPosition = window.scrollY;
    if(!counter){
        window.requestAnimationFrame(() => {
                changeHeaderColor(lastPosition);
                counter = false;
            });
        counter = true;
    }
})

//when doublclicking the welcome header, it will underline.
const welcomeHeader = document.querySelector("h2");

welcomeHeader.addEventListener("dblclick", () => {
    welcomeHeader.style.textDecoration = "underline"
})

//when finishes loading, message will show 
window.addEventListener('load', () => {
    console.log("Done loading! :D")
})