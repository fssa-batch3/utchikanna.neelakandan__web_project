let card = [
  {
    image: "../assets/images/triangle.jpg",
    href: "#triangle",
    rate: 8.5,
    title: "Triangle",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/top.jpg",
    href: "#top",
    rate: 8,
    title: "Top Gun:Maverick",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/inter.jpg",
    href: "#inter",
    rate: 9,
    title: "Intersteller",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/ince.jpg",
    href: "#inception",
    rate: 9.5,
    title: "Inception",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/pre.jpg",
    href: "#prestige",
    rate: 9,
    title: "The Prestige",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/pass.jpg",
    href: "#pass",
    rate: 8,
    title: "Passengers",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/john.jpg",
    href: "#john",
    rate: 9,
    title: "John Wick",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/dont.jpg",
    href: "#carter",
    rate: 8.5,
    title: "Don't Breathe",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
];

// const url = window.location.search; // ?datas={}
// const urlParams = new URLSearchParams(url); // converting string into key value pair
// const datas = urlParams.get("datas"); // return value of the "name" key

// card
let card_div;
let a_tag;
let image;
let rate;
let rating;
let title;
let btn;
let delete_btn;
let edit_btn;
let link;

let create_card = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card);
function movieType(type) {
  const movietype = create_card.filter((h) => h.movietype == type);
  return movietype;
}

for (let i = 0; i < movieType("hollywood").length; i++) {
  card.push(movieType("hollywood")[i]);
  console.log(card);
}

for (let i = 0; i < card.length; i++) {
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
  btn.innerText = "Watch Now";
  link.append(btn);

  document.querySelector(".menu").append(card_div);
}

// let newCard = localStorage.setItem("new_card", JSON.stringify(card));
