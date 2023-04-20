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
  }
}

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
  card_div1.append(image1);

  // icon

  rate1 = document.createElement("i");
  rate1.setAttribute("id", "star");
  rate1.setAttribute("class", "fa fa-star");
  card_div1.append(rate1);

  // rating

  rating1 = document.createElement("h3");
  rating1.setAttribute("class", "rate");
  rating1.innerText = fav[i]["rate"];
  card_div1.append(rating1);

  // title

  title1 = document.createElement("h2");
  title1.setAttribute("class", "title");
  title1.innerText = fav[i]["title"];
  rating1.append(title1);

  // a tag

  link1 = document.createElement("a");
  link1.setAttribute("class", "try");
  link1.setAttribute("href", fav[i]["link"]);
  card_div1.append(link1);

  // button

  btn1 = document.createElement("button");
  btn1.setAttribute("class", "btn");
  btn1.innerText = "Trailer";
  link1.append(btn1);

  document.querySelector(".favlist").append(card_div1);
}
