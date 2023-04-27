let card5 = [];

// card
let card_div5;
let a_tag5;
let image5;
let rate5;
let rating5;
let title5;
let btn5;
let link5;

let create_card5 = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card5);
function movieType(type) {
  const movietype = create_card5.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("superhero movies").length; i++) {
  card5.push(movieType("superhero movies")[i]);
}

for (let i = 0; i < card5.length; i++) {
  // box
  card_div5 = document.createElement("div");
  card_div5.setAttribute("class", "box");

  // a tag

  a_tag5 = document.createElement("a");
  a_tag5.setAttribute(
    "href",
    "../after-login/productDetails.html?id=" + card5[i]["id"]
  );
  a_tag5.setAttribute("id", "recently");
  card_div5.append(a_tag5);

  // image

  image5 = document.createElement("img");
  image5.setAttribute("id", "image-1");
  image5.setAttribute("src", card5[i]["image"]);
  image5.setAttribute("alt", "image");
  a_tag5.append(image5);

  // star

  rate5 = document.createElement("i");
  rate5.setAttribute("id", "star");
  rate5.setAttribute("class", "fa fa-star");
  a_tag5.append(rate5);

  // rating

  rating5 = document.createElement("h3");
  rating5.setAttribute("class", "rate");
  rating5.innerText = card5[i]["rate"];
  a_tag5.append(rating5);

  // title

  title5 = document.createElement("h2");
  title5.setAttribute("class", "title");
  title5.innerText = card5[i]["title"];
  rating5.append(title5);

  // a tag

  link5 = document.createElement("a");
  link5.setAttribute("class", "try");
  link5.setAttribute("href", card5[i]["link"]);
  a_tag5.append(link5);

  // button

  btn5 = document.createElement("button");
  btn5.setAttribute("href", card5[i]["link"]);
  btn5.setAttribute("class", "btn");
  btn5.innerText = "Trailer";
  link5.append(btn5);

  document.querySelector(".Superhero").append(card_div5);
}
