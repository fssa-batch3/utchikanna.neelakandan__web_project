let slideContainer = document.getElementsByClassName("menu");
let slider = document.getElementsByClassName("slider");
let cards = document.getElementsByClassName("box");

let elementsToShow = 5;

let slideContainerWidth = slideContainer.clientWidth;

let cardWidth = slideContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + "px";

for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element = cardWidth + "px";
}

function prev() {
  if (
    +slider.style.marginLeft.slice(0, -2) !=
    -cardWidth * (cards.length - elementsToShow)
  )
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
}

function next() {
  if (+slider.style.marginLeft.slice(0, -2) != 0)
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
}
