let card4 = [];

// card
let card_div4;
let a_tag4;
let image4;
let rate4;
let rating4;
let title4;
let btn4;
let link4;

let create_card4 = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card4);
function movieType(type) {
  const movietype = create_card4.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("anime Series").length; i++) {
  card4.push(movieType("anime Series")[i]);
 
}

for (let i = 0; i < card4.length; i++) {
  // box
  card_div4 = document.createElement("div");
  card_div4.setAttribute("class", "box");

  // a tag

  a_tag4 = document.createElement("a");
  a_tag4.setAttribute(
    "href",
    "../pages/productDetails.html?id=" + card4[i]["id"]
  );
  card_div4.append(a_tag4);

  // image

  image4 = document.createElement("img");
  image4.setAttribute("id", "image-1");
  image4.setAttribute("src", card4[i]["image"]);
  image4.setAttribute("alt", "image");
  a_tag4.append(image4);

  // star

  rate4 = document.createElement("i");
  rate4.setAttribute("id", "star");
  rate4.setAttribute("class", "fa fa-star");
  a_tag4.append(rate4);

  // rating

  rating4 = document.createElement("h3");
  rating4.setAttribute("class", "rate");
  rating4.innerText = card4[i]["rate"];
  a_tag4.append(rating4);

  // title

  title4 = document.createElement("h2");
  title4.setAttribute("class", "title");
  title4.innerText = card4[i]["title"];
  rating4.append(title4);

  // a tag

  link4 = document.createElement("a");
  link4.setAttribute("class", "try");
  link4.setAttribute("href", card4[i]["link"]);
  a_tag4.append(link4);

  // button

  btn4 = document.createElement("button");
  btn4.setAttribute("href", card4[i]["link"]);
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Trailer";
  link4.append(btn4);

  document.querySelector(".anime").append(card_div4);
}
