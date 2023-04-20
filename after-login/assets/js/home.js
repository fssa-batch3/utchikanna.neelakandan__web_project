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
  less.setAttribute("class", "less");
  less.setAttribute("id", "less1");
  less.setAttribute("onclick", "less()");
  less.innerText = "Show less";
  document.querySelector(".showMore").append(less);
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
