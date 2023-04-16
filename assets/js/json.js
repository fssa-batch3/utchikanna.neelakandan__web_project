let productContainers = [...document.querySelectorAll(".menu")];
let nxtBtn = [...document.querySelectorAll(".next")];
let prevBtn = [...document.querySelectorAll(".prev")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i]?.addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  prevBtn[i]?.addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//search filter
let searchbar = document.getElementById("searchbar");
const cards = document.getElementsByClassName("box");

searchbar.addEventListener("input", () => {
  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    if (
      element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});
