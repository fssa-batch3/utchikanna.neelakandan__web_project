let card = [];

let showMore = JSON.parse(localStorage.getItem("new_card"));

for (let i = 0; i < 10; i++) {
  card.push(showMore[i]);
}

// card
let card_div;
let image;
let rating;
let rate;
let title;
let a_tag;
let btn;
let link;

for (let i = 0; i < 10; i++) {
  // box
  card_div = document.createElement("div");
  card_div.setAttribute("class", "box");

  // a tag

  a_tag = document.createElement("a");
  a_tag.setAttribute(
    "href",
    "../after-login/productDetails.html?id=" + card[i]["id"]
  );
  card_div.append(a_tag);

  // image

  image = document.createElement("img");
  image.setAttribute("id", "image-1");
  image.setAttribute("src", card[i]["image"]);
  image.setAttribute("alt", "image");
  a_tag.append(image);

  // star

  rate = document.createElement("i");
  rate.setAttribute("id", "star");
  rate.setAttribute("class", "fa fa-star");
  a_tag.append(rate);

  // rating

  rating = document.createElement("h3");
  rating.setAttribute("class", "rate");
  rating.innerText = card[i]["rate"];
  a_tag.append(rating);

  // title

  title = document.createElement("h2");
  title.setAttribute("class", "title");
  title.innerText = card[i]["title"];
  rating.append(title);

  // a tag

  link = document.createElement("a");
  link.setAttribute("class", "try");
  link.setAttribute("href", card[i]["link"]);
  a_tag.append(link);

  // button

  btn = document.createElement("button");
  btn.setAttribute("href", card[i]["link"]);
  btn.setAttribute("class", "btn");
  btn.innerText = "Trailer";
  link.append(btn);

  document.querySelector(".menu").append(card_div);
}

//  show more

function view() {
  // card
  let card_div;
  let image;
  let rating;
  let rate;
  let title;
  let btn;
  let a_tag;
  let link;

  let card = [];

  let showMore = JSON.parse(localStorage.getItem("new_card"));
  console.log(showMore);

  for (let i = 0; i < showMore.length; i++) {
    card.push(showMore[i]);
  }

  for (let i = 10; i < card.length; i++) {
    // box
    card_div = document.createElement("div");
    card_div.setAttribute("class", "box");

    // a tag

    a_tag = document.createElement("a");
    a_tag.setAttribute(
      "href",
      "../after-login/productDetails.html?id=" + card[i]["id"]
    );
    card_div.append(a_tag);

    // image

    image = document.createElement("img");
    image.setAttribute("id", "image-1");
    image.setAttribute("src", card[i]["image"]);
    image.setAttribute("alt", "image");
    a_tag.append(image);

    // star

    rate = document.createElement("i");
    rate.setAttribute("id", "star");
    rate.setAttribute("class", "fa fa-star");
    a_tag.append(rate);

    // rating

    rating = document.createElement("h3");
    rating.setAttribute("class", "rate");
    rating.innerText = card[i]["rate"];
    a_tag.append(rating);

    // title

    title = document.createElement("h2");
    title.setAttribute("class", "title");
    title.innerText = card[i]["title"];
    rating.append(title);

    // a tag

    link = document.createElement("a");
    link.setAttribute("class", "try");
    link.setAttribute("href", card[i]["link"]);
    a_tag.append(link);

    // button

    btn = document.createElement("button");
    btn.setAttribute("href", card[i]["link"]);
    btn.setAttribute("class", "btn");
    btn.innerText = "Trailer";
    link.append(btn);
    document.querySelector(".showMore").append(card_div);
  }
  let non = document.getElementById("less");
  non.style.display = "none";
  let less = document.createElement("button");
  // less.setAttribute("class", "less");
  less.setAttribute("id", "less1");
  less.setAttribute("onclick", "less()");
  less.innerText = "Show less";
  document.querySelector(".filter").prepend(less);
  return card_div;
}

//  show less

function less() {
  let showHid = document.getElementById("showMore1");
  showHid.style.display = "none";
  let showLess = document.getElementById("less1");
  showLess.style.display = "none";
  let returnBtn = document.getElementById("less");
  returnBtn.style.display = "block";
  location.reload();
}

function Kollywood() {
  let kollywood = document.getElementById("Kollywood");
  kollywood.style.color = "#efefef";
  kollywood.style.backgroundColor = "#333";

  document.querySelector(".menu").style.display = "none";

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

  // its for filter specific one type

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

    document.querySelector(".sorting").append(card_div3);
  }
}
