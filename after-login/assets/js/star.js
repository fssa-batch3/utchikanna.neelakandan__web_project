// star

const allStars = document.querySelectorAll(".star");

allStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const currentStarLevel = index + 1;

    allStars.forEach((star, j) => {
      const isStarActive = currentStarLevel >= j + 1;
      star.innerHTML = isStarActive ? "&#9733;" : "&#9734;";
    });
  });
});

// scroll

const productContainers = [...document.querySelectorAll(".menu")];
const nxtBtn = [...document.querySelectorAll(".next")];
const prevBtn = [...document.querySelectorAll(".prev")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// user image showing

let user_email = JSON.parse(localStorage.getItem("details"));

let user_details = JSON.parse(localStorage.getItem("user"));
console.log(user_details);
let get_obj = user_details.find(function (user_obj) {
  let check_email = user_obj["email"];
  if (user_email === check_email) {
    return true;
  }
});
console.log(get_obj);

let viewImage = document.getElementById("view_image");
viewImage.src = get_obj["image"];
