let card = [
  {
    image: "../assets/images/dragon.jpg",
    href: "#dragon",
    rate: 8.5,
    title: "House of the Dragon",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/squid.jpg",
    href: "#squid",
    rate: 8,
    title: "Squid Game",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/game.jpg",
    href: "#game",
    rate: 9,
    title: "Game of Throne",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/bad.jpg",
    href: "#bad",
    rate: 9.5,
    title: "Breaking Bad",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/money.jpg",
    href: "#money",
    rate: 8,
    title: "Money Heist",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/prison.jpg",
    href: "#prison",
    rate: 8.5,
    title: "Prison Break",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/peaky.jpg",
    href: "#peaky",
    rate: 8,
    title: "Peaky Blinders",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/scam.jpg",
    href: "#scam",
    rate: 8.5,
    title: "Scam 1992",
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

let create_card = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card);
function movieType(type) {
  const movietype = create_card.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("web series").length; i++) {
  card.push(movieType("web series")[i]);
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
    "../pages/productDetails.html?id=" + card[i]["id"]
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
