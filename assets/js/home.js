let card = [
  {
    image: "../assets/images/moon.jpg",
    href: "#war",
    rate: 4.5,
    title: "Moon Knight",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/game.jpg",
    href: "#game",
    rate: 4,
    title: "Game of Throne",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/inter.jpg",
    href: "#inter",
    rate: 4.5,
    title: "Intersteller",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/war.jpg",
    href: "#war",
    rate: 4.5,
    title: "Infinity War",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/pre.jpg",
    href: "#prestige",
    rate: 4,
    title: "The Prestige",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image: "../assets/images/mahaan.jpg",
    href: "#mahaan",
    rate: 4,
    title: "Mahaan",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
    href: "#triangle",
    rate: 3,
    title: "My Hero Academia",
    link: "https://www.netflix.com/in/title/80135674?source=35",
  },
  {
    image: "../assets/images/dont.jpg",
    href: "#carter",
    rate: 3.5,
    title: "Don't Breathe",
    link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
  },
];

// card
let card_div;
let image;
let rating;
let rate;
let title;
let btn;
let link;

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
  image.setAttribute("alt", card[i]["alt"]);
  card_div.append(image);

  // icon

  rate = document.createElement("i");
  rate.setAttribute("id", "star");
  rate.setAttribute("class", "fa fa-star");
  card_div.append(rate);

  // rating

  rating = document.createElement("h3");
  rating.setAttribute("class", "rate");
  rating.innerText = card[i]["rate"];
  card_div.append(rating);

  // title

  title = document.createElement("h2");
  title.setAttribute("class", "title");
  title.innerText = card[i]["title"];
  rating.append(title);

  // a tag

  link = document.createElement("a");
  link.setAttribute("class", "try");
  link.setAttribute("href", card[i]["link"]);
  card_div.append(link);

  // button

  btn = document.createElement("button");
  btn.setAttribute("class", "btn");
  btn.innerText = "Watch Now";
  link.append(btn);

  document.querySelector(".menu").append(card_div);
}

function view() {
  let card = [
    {
      image: "https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg",
      href: "#triangle",
      rate: 3.5,
      title: "Chainsaw Man",
      link: "https://www.netflix.com/in/title/81215627?source=35",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
      href: "#triangle",
      rate: 3,
      title: "My Hero Academia",
      link: "https://www.netflix.com/in/title/80135674?source=35",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_FMjpg_UX1000_.jpg",
      href: "#triangle",
      rate: 3,
      title: "Tokyo Revengers",
      link: "https://www.netflix.com/in/title/81442520?source=35",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMWM4Njg2MjUtODU3OS00MGNmLWIyNTctZGZkNTdjN2JhNmU2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
      href: "#triangle",
      rate: 3.5,
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
      image: "../assets/images/triangle.jpg",
      href: "#triangle",
      rate: 3.5,
      title: "Triangle",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/top.jpg",
      href: "#top",
      rate: 3,
      title: "Top Gun:Maverick",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/inter.jpg",
      href: "#inter",
      rate: 4,
      title: "Intersteller",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/asuran_.jpg",
      href: "#asuran",
      rate: 4.5,
      title: "Asuran",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/Nayakan.jpg",
      href: "#nayakan",
      rate: 4,
      title: "Nayakan",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/thalapathy.jpg",
      href: "#thalapathy",
      rate: 3.5,
      title: "Thalapathy",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/mahaan.jpg",
      href: "#mahaan",
      rate: 4,
      title: "Mahaan",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/soorarai.jpg",
      href: "#soorarai",
      rate: 4.5,
      title: "Soorarai Potru",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/kgf2.jpg",
      href: "#captain",
      rate: 3.5,
      title: "KGF-2",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/vikram.jpg",
      href: "#vikram",
      rate: 3.5,
      title: "Vikram",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/end.jpg",
      href: "#endgame",
      rate: 4,
      title: "End Game",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/war.jpg",
      href: "#war",
      rate: 4.5,
      title: "Infinity War",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/spider.jpg",
      href: "#spider",
      rate: 3.5,
      title: "No Way Home",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/doctor.jpg",
      href: "#doctor",
      rate: 3,
      title: "Doctor Strange",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/civil.jpg",
      href: "#civil",
      rate: 4,
      title: "Civil War",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/vada.jpg",
      href: "#vada",
      rate: 4.5,
      title: "Vada Chennai",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/ince.jpg",
      href: "#inception",
      rate: 4.5,
      title: "Inception",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/pre.jpg",
      href: "#prestige",
      rate: 4,
      title: "The Prestige",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/pass.jpg",
      href: "#pass",
      rate: 3,
      title: "Passengers",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/john.jpg",
      href: "#john",
      rate: 4,
      title: "John Wick",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/dont.jpg",
      href: "#carter",
      rate: 3.5,
      title: "Don't Breathe",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
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
      image: "../assets/images/loki.jpg",
      href: "#endgame",
      rate: 4.5,
      title: "Loki",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/moon.jpg",
      href: "#war",
      rate: 4,
      title: "Moon Knight",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/wanda.jpg",
      href: "#spider",
      rate: 3.5,
      title: "Wanda Vision",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/ms.jpg",
      href: "#doctor",
      rate: 3.5,
      title: "Ms Marvel",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/falcon.jpg",
      href: "#civil",
      rate: 3,
      title: "Falcon",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/she.jpg",
      href: "#thor",
      rate: 2.5,
      title: "She Hulk",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/hawkeye.jpg",
      href: "#iron",
      rate: 3.5,
      title: "Hawkeye",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/what.jpg",
      href: "#captain",
      rate: 4,
      title: "What If...?",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/dragon.jpg",
      href: "#dragon",
      rate: 3.5,
      title: "House of the Dragon",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/squid.jpg",
      href: "#squid",
      rate: 4,
      title: "Squid Game",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/game.jpg",
      href: "#game",
      rate: 4,
      title: "Game of Throne",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/bad.jpg",
      href: "#bad",
      rate: 4.5,
      title: "Breaking Bad",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/money.jpg",
      href: "#money",
      rate: 4,
      title: "Money Heist",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/prison.jpg",
      href: "#prison",
      rate: 3.5,
      title: "Prison Break",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/peaky.jpg",
      href: "#peaky",
      rate: 4,
      title: "Peaky Blinders",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/scam.jpg",
      href: "#scam",
      rate: 3.5,
      title: "Scam 1992",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/thor.jpg",
      href: "#thor",
      rate: 3,
      title: "Thor Rangnarok",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/iron.jpg",
      href: "#iron",
      rate: 3.5,
      title: "Iron Man",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/captain.jpg",
      href: "#captain",
      rate: 4,
      title: "The First Avenger",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
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
  let image;
  let rating;
  let rate;
  let title;
  let btn;
  let link;

  let showMore = JSON.parse(localStorage.getItem("new_card"));
  console.log(showMore);

  let mixedArr = [];

  for (let i = 0; i < card.length; i++) {
    mixedArr.push(card[i]);
  }
  for (let i = 0; i < showMore.length; i++) {
    mixedArr.push(showMore[i]);
  }

  for (let i = 0; i < mixedArr.length; i++) {
    // box
    card_div = document.createElement("div");
    card_div.setAttribute("class", "box");

    // a tag

    a_tag = document.createElement("a");
    a_tag.setAttribute(
      "href",
      "../pages/productDetails.html?id=" + mixedArr[i]["id"]
    );
    card_div.append(a_tag);

    // image

    image = document.createElement("img");
    image.setAttribute("id", "image-1");
    image.setAttribute("src", mixedArr[i]["image"]);
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
    rating.innerText = mixedArr[i]["rate"];
    a_tag.append(rating);

    // title

    title = document.createElement("h2");
    title.setAttribute("class", "title");
    title.innerText = mixedArr[i]["title"];
    rating.append(title);

    // a tag

    link = document.createElement("a");
    link.setAttribute("class", "try");
    link.setAttribute("href", mixedArr[i]["link"]);
    a_tag.append(link);

    // button

    btn = document.createElement("button");
    btn.setAttribute("href", mixedArr[i]["link"]);
    btn.setAttribute("class", "btn");
    btn.innerText = "Watch Now";
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

function less() {
  let showHid = document.getElementById("showMore1");
  showHid.style.display = "none";
  let showLess = document.getElementById("less1");
  showLess.style.display = "none";
  let returnBtn = document.getElementById("less");
  returnBtn.style.display = "block";
  location.reload();
}
