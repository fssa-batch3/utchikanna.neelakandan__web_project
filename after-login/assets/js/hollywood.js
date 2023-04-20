let card2 = [];

// card
let card_div2;
let a_tag2;
let image2;
let rate2;
let rating2;
let title2;
let btn2;
let delete_btn;
let edit_btn;
let link2;

let create_card = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card);
function movieType(type) {
  const movietype = create_card.filter((h) => h.movietype == type);
  return movietype;
}

for (let i = 0; i < movieType("hollywood").length; i++) {
  card2.push(movieType("hollywood")[i]);
}

for (let i = 0; i < card2.length; i++) {
  // box
  card_div2 = document.createElement("div");
  card_div2.setAttribute("class", "box");

  // a tag

  a_tag2 = document.createElement("a");
  a_tag2.setAttribute(
    "href",
    "../after-login/productDetails.html?id=" + card2[i]["id"]
  );
  card_div2.append(a_tag2);

  // image

  image2 = document.createElement("img");
  image2.setAttribute("id", "image-1");
  image2.setAttribute("src", card2[i]["image"]);
  image2.setAttribute("alt", "image");
  a_tag2.append(image2);

  // star

  rate2 = document.createElement("i");
  rate2.setAttribute("id", "star");
  rate2.setAttribute("class", "fa fa-star");
  a_tag2.append(rate2);

  // rating

  rating2 = document.createElement("h3");
  rating2.setAttribute("class", "rate");
  rating2.innerText = card2[i]["rate"];
  a_tag2.append(rating2);

  // title

  title2 = document.createElement("h2");
  title2.setAttribute("class", "title");
  title2.innerText = card2[i]["title"];
  rating2.append(title2);

  // a tag

  link2 = document.createElement("a");
  link2.setAttribute("class", "try");
  link2.setAttribute("href", card2[i]["link"]);
  a_tag2.append(link2);

  // button

  btn2 = document.createElement("button");
  btn2.setAttribute("href", card2[i]["link"]);
  btn2.setAttribute("class", "btn");
  btn2.innerText = "Watch Now";
  link2.append(btn2);

  document.querySelector(".hollywood").append(card_div2);
}
