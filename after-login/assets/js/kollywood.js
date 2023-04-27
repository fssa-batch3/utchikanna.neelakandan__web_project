let card3 = [];

// card
let card_div3;
let a_tag3;
let image3;
let rate3;
let rating3;
let title3;
let btn3;
let link3;

let create_card3 = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card);
function movieType(type) {
  const movietype = create_card3.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("kollywood").length; i++) {
  card3.push(movieType("kollywood")[i]);
}
for (let i = 0; i < card3.length; i++) {
  // box
  card_div3 = document.createElement("div");
  card_div3.setAttribute("class", "box");

  // a tag

  a_tag3 = document.createElement("a");
  a_tag3.setAttribute(
    "href",
    "../after-login/productDetails.html?id=" + card3[i]["id"]
  );
  a_tag3.setAttribute("id", "recently");
  card_div3.append(a_tag3);

  // image

  image3 = document.createElement("img");
  image3.setAttribute("id", "image-1");
  image3.setAttribute("src", card3[i]["image"]);
  image3.setAttribute("alt", "image");
  a_tag3.append(image3);

  // star

  rate3 = document.createElement("i");
  rate3.setAttribute("id", "star");
  rate3.setAttribute("class", "fa fa-star");
  a_tag3.append(rate3);

  // rating

  rating3 = document.createElement("h3");
  rating3.setAttribute("class", "rate");
  rating3.innerText = card3[i]["rate"];
  a_tag3.append(rating3);

  // title

  title3 = document.createElement("h2");
  title3.setAttribute("class", "title");
  title3.innerText = card3[i]["title"];
  rating3.append(title3);

  // a tag

  link3 = document.createElement("a");
  link3.setAttribute("class", "try");
  link3.setAttribute("href", card3[i]["link"]);
  a_tag3.append(link3);

  // button

  btn3 = document.createElement("button");
  btn3.setAttribute("href", card3[i]["link"]);
  btn3.setAttribute("class", "btn");
  btn3.innerText = "Trailer";
  link3.append(btn3);

  document.querySelector(".kollywood").append(card_div3);
}
