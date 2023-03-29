// star

const allStars = document.querySelectorAll(".star");
let selectedStarValue = 0; // variable to store the selected star's value

allStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const currentStarLevel = index + 1;
    selectedStarValue = currentStarLevel; // set the selected star's value to the current level

    allStars.forEach((star, j) => {
      const isStarActive = currentStarLevel >= j + 1;
      star.innerHTML = isStarActive ? "&#9733;" : "&#9734;";
    });
  });
  // Now you can use the selectedStarValue variable wherever you need to access the selected star's value
  console.log(selectedStarValue); // will log the selected star's value to the console
});
let get_email = JSON.parse(localStorage.getItem("details"));

function ratingFor() {
  let all = [];

  let rating_id = Date.now();
  let rating = selectedStarValue;
  console.log(rating);
  let rating_obj = {
    get_email,
    rating_id,
    rating,
    get_movie_id,
  };

  const arr = JSON.parse(localStorage.getItem("ratings"));
  let up = arr.find(function (event) {
    let id = event["get_email"];
    let movie_id = event["get_movie_id"];
    if (get_email == id && get_movie_id == movie_id) {
      let newObj = { rating };
      let update = Object.assign(up, newObj);
      let ind = arr.indexOf(up);
      arr[ind] = update;
      localStorage.setItem("ratings", JSON.stringify(arr));
      location.reload();
    }
  });

  if (localStorage.getItem("ratings") != null) {
    all = JSON.parse(localStorage.getItem("ratings"));
    console.log(all);
  } else {
    all.push(rating_obj);
    localStorage.setItem("ratings", JSON.stringify(all));
    location.reload();
  }
}

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
