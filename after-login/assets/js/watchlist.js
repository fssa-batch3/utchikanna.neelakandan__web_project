//  add watchlist

const favMovie = JSON.parse(localStorage.getItem("favMovie"));

const allMovie = JSON.parse(localStorage.getItem("new_card"));

let iden = [];

let fav = [];

for (let j = 0; j < favMovie.length; j++) {
  if (get_email == favMovie[j]["get_email"]) {
    let findMovie = allMovie.find(function (one) {
      let movie = one["id"];
      if (movie == favMovie[j]["get_movie_id"]) {
        return true;
      }
    });
    fav.push(findMovie);
    let empty = document.getElementById("noFound");
    empty.style.display = "none";
  }
}

console.log(fav);

// card
let card_div1;
let image1;
let rating1;
let rate1;
let title1;
let a_tag1;
let btn1;
let link1;

for (let i = 0; i < fav.length; i++) {
  // box
  card_div1 = document.createElement("div");
  card_div1.setAttribute("class", "box");

  // a tag

  a_tag1 = document.createElement("a");
  a_tag1.setAttribute(
    "href",
    "../after-login/productDetails.html?id=" + fav[i]["id"]
  );
  card_div1.append(a_tag1);

  // image

  image1 = document.createElement("img");
  image1.setAttribute("id", "image-1");
  image1.setAttribute("src", fav[i]["image"]);
  image1.setAttribute("alt", fav[i]["alt"]);
  a_tag1.append(image1);

  // icon

  rate1 = document.createElement("i");
  rate1.setAttribute("id", "star");
  rate1.setAttribute("class", "fa fa-star");
  a_tag1.append(rate1);

  // rating

  rating1 = document.createElement("h3");
  rating1.setAttribute("class", "rate");
  rating1.innerText = fav[i]["rate"];
  a_tag1.append(rating1);

  // title

  title1 = document.createElement("h2");
  title1.setAttribute("class", "title");
  title1.innerText = fav[i]["title"];
  rating1.append(title1);

  // a tag

  link1 = document.createElement("a");
  link1.setAttribute("class", "try");
  link1.setAttribute("href", fav[i]["link"]);
  a_tag1.append(link1);

  // button

  btn1 = document.createElement("button");
  btn1.setAttribute("class", "btn");
  btn1.innerText = "Trailer";
  link1.append(btn1);

  // delete btn
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.setAttribute("onclick", "deletList(" + fav[i]["id"] + ")");

  let deletePara = document.createElement("p");
  deletePara.setAttribute("class", "paragraph");
  deletePara.innerText = "delete";
  deleteBtn.append(deletePara);

  let deleteSpan = document.createElement("span");
  deleteSpan.setAttribute("class", "delete-wrapper");
  deleteBtn.append(deleteSpan);

  let deleteSvg = document.createElement("img");
  deleteSvg.setAttribute("src", "../after-login/assets/images/delete.svg");
  deleteSvg.setAttribute("class", "deleteIcon");
  deleteSvg.setAttribute("width", "30px");
  deleteSvg.setAttribute("height", "30px");
  deleteSpan.append(deleteSvg);

  let deletePath = document.createElement("path");
  deletePath.setAttribute(
    "d",
    "M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
  );
  deletePath.setAttribute("stroke", "#000000");
  deletePath.setAttribute("stroke-width", "2");
  deletePath.setAttribute("stroke-linecap", "round");
  deletePath.setAttribute("stroke-linejoin", "round");
  deleteSvg.append(deletePath);

  localStorage.setItem("oneWhoLogList", JSON.stringify(fav));
  document.querySelector(".favlist").append(card_div1);
  document.querySelector(".deleteDiv").append(deleteBtn);
}

// delete list

function deletList(id) {
  console.log(id);
  let getEmail = JSON.parse(localStorage.getItem("details"));
  let arr = JSON.parse(localStorage.getItem("favMovie"));
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (getEmail == arr[i]["get_email"] && id == arr[i]["get_movie_id"]) {
      let ind = arr.indexOf(arr[i]);
      arr.splice(ind, 1);
      localStorage.setItem("favMovie", JSON.stringify(arr));
      console.log(arr);
      location.reload();
    }
  }
}
