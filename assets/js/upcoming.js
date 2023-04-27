let card8 = [];

// card
let card_div8;
let a_tag8;
let image8;
let rate8;
let rating8;
let title8;
let btn8;
let link8;

let create_card8 = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card8);
function movieType(type) {
  const movietype = create_card8.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("upcoming movie").length; i++) {
  card8.push(movieType("upcoming movie")[i]);
}

for (let i = 0; i < card8.length; i++) {
  // box
  card_div8 = document.createElement("div");
  card_div8.setAttribute("class", "box");

  // a tag

  a_tag8 = document.createElement("a");
  a_tag8.setAttribute(
    "href",
    "../pages/upcomingDetails.html?id=" + card8[i]["id"]
  );
  card_div8.append(a_tag8);

  // image

  image8 = document.createElement("img");
  image8.setAttribute("id", "image-1");
  image8.setAttribute("src", card8[i]["image"]);
  image8.setAttribute("alt", "image");
  a_tag8.append(image8);

  // star

  rate8 = document.createElement("i");
  rate8.setAttribute("id", "star");
  rate8.setAttribute("class", "fa fa-star");
  a_tag8.append(rate8);

  // rating

  rating8 = document.createElement("h3");
  rating8.setAttribute("class", "rate");
  rating8.innerText = card8[i]["rate"];
  a_tag8.append(rating8);

  // title

  title8 = document.createElement("h2");
  title8.setAttribute("class", "title");
  title8.innerText = card8[i]["title"];
  rating8.append(title8);

  // a tag

  link8 = document.createElement("a");
  link8.setAttribute("class", "try");
  link8.setAttribute("href", card8[i]["link"]);
  a_tag8.append(link8);

  // button

  btn8 = document.createElement("button");
  btn8.setAttribute("href", card8[i]["link"]);
  btn8.setAttribute("class", "btn");
  btn8.innerText = "Trailer";
  link8.append(btn8);

  document.querySelector(".upcoming").append(card_div8);
}
