let card = [
  {
    image: "../assets/images/end.jpg",
    href: "#endgame",
    rate: 9,
    title: "End Game",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/war.jpg",
    href: "#war",
    rate: 9.5,
    title: "Infinity War",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/spider.jpg",
    href: "#spider",
    rate: 8.5,
    title: "No Way Home",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/doctor.jpg",
    href: "#doctor",
    rate: 8,
    title: "Doctor Strange",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/civil.jpg",
    href: "#civil",
    rate: 9,
    title: "Civil War",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/thor.jpg",
    href: "#thor",
    rate: 8,
    title: "Thor Rangnarok",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/iron.jpg",
    href: "#iron",
    rate: 8.5,
    title: "Iron Man",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/captain.jpg",
    href: "#captain",
    rate: 9,
    title: "The First Avenger",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
];

// card
let card_div;
let a_tag;
let image;
let rate;
let rating;
let title;
let btn;
let link;

for (let i = 0; i < card.length; i++) {
  // box
  card_div = document.createElement("div");
  card_div.setAttribute("class", "box");

  // a tag

  a_tag = document.createElement("a");
  a_tag.setAttribute("href", card[i]["href"]);
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
