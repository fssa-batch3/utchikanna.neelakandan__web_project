let card6 = [];

// card
let card_div6;
let a_tag6;
let image6;
let rate6;
let rating6;
let title6;
let btn6;
let link6;
// its for filter specific one type
let create_card6 = JSON.parse(localStorage.getItem("new_card"));
console.log(create_card6);
function movieType(type) {
  const movietype = create_card6.filter((h) => h.movietype == type);
  return movietype;
}
for (let i = 0; i < movieType("web series").length; i++) {
  card6.push(movieType("web series")[i]);
}

for (let i = 0; i < card6.length; i++) {
  // box
  card_div6 = document.createElement("div");
  card_div6.setAttribute("class", "box");

  // a tag

  a_tag6 = document.createElement("a");
  a_tag6.setAttribute(
    "href",
    "../pages/productDetails.html?id=" + card6[i]["id"]
  );
  card_div6.append(a_tag6);

  // image

  image6 = document.createElement("img");
  image6.setAttribute("id", "image-1");
  image6.setAttribute("src", card6[i]["image"]);
  image6.setAttribute("alt", "image");
  a_tag6.append(image6);

  // star

  rate6 = document.createElement("i");
  rate6.setAttribute("id", "star");
  rate6.setAttribute("class", "fa fa-star");
  a_tag6.append(rate6);

  // rating

  rating6 = document.createElement("h3");
  rating6.setAttribute("class", "rate");
  rating6.innerText = card6[i]["rate"];
  a_tag6.append(rating6);

  // title

  title6 = document.createElement("h2");
  title6.setAttribute("class", "title");
  title6.innerText = card6[i]["title"];
  rating6.append(title6);

  // a tag

  link6 = document.createElement("a");
  link6.setAttribute("class", "try");
  link6.setAttribute("href", card6[i]["link"]);
  a_tag6.append(link6);

  // button

  btn6 = document.createElement("button");
  btn6.setAttribute("href", card6[i]["link"]);
  btn6.setAttribute("class", "btn");
  btn6.innerText = "Trailer";
  link6.append(btn6);

  document.querySelector(".web").append(card_div6);
}
