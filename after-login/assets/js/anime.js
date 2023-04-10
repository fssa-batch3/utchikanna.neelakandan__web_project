let card = [
  {
    image: "https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg",
    href: "#triangle",
    rate: 4.5,
    title: "Chainsaw Man",
    link: "https://www.netflix.com/in/title/81215627?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 4,
    title: "My Hero Academia",
    link: "https://www.netflix.com/in/title/80135674?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 3.5,
    title: "Tokyo Revengers",
    link: "https://www.netflix.com/in/title/81442520?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMWM4Njg2MjUtODU3OS00MGNmLWIyNTctZGZkNTdjN2JhNmU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 4.5,
    title: "SPY×FAMILY",
    link: "https://www.netflix.com/in/title/81511410?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    href: "#triangle",
    rate: 4,
    title: "Naruto: Shippuden",
    link: "https://www.netflix.com/in/title/80000603?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 3.5,
    title: "Mob Psycho 100",
    link: "https://www.netflix.com/in/title/80179798?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 4,
    title: "Death Note",
    link: "https://www.netflix.com/in/title/70204970?source=35",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    href: "#triangle",
    rate: 4,
    title: "Invincible",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.92bc0a58-183a-7326-e470-31742586c852?autoplay=0&ref_=atv_cf_strg_wb",
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
for (let i = 0; i < movieType("anime Series").length; i++) {
  card.push(movieType("anime Series")[i]);
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
