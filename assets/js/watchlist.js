//  add watchlist

const favMovie = JSON.parse(localStorage.getItem("favMovie"));

const allMovie = JSON.parse(localStorage.getItem("new_card"));

let iden = [];

let fav = [];

// find user's watchlist

for (let favItem of favMovie) {
  if (get_email === favItem["get_email"]) {
    let findMovie = allMovie.find(
      (one) => one["id"] === favItem["get_movie_id"]
    );
    fav.push(findMovie);
  }
}

function createElement(tagName, attributes = {}, textContent) {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

for (let favItem of fav) {
  // box
  card_div1 = createElement("div", { class: "box" });

  // a tag
  a_tag1 = createElement("a", {
    href: `../after-login/productDetails.html?id=${favItem["id"]}`,
  });
  card_div1.append(a_tag1);

  // image
  image1 = createElement("img", {
    id: "image-1",
    src: favItem["image"],
    alt: favItem["alt"],
  });
  card_div1.append(image1);

  // icon
  rate1 = createElement("i", { id: "star", class: "fa fa-star" });
  card_div1.append(rate1);

  // rating
  rating1 = createElement("h3", { class: "rate" }, favItem["rate"]);
  card_div1.append(rating1);

  // title
  title1 = createElement("h2", { class: "title" }, favItem["title"]);
  rating1.append(title1);

  // a tag
  link1 = createElement("a", { class: "try", href: favItem["link"] });
  card_div1.append(link1);

  // button
  btn1 = createElement("button", { class: "btn" }, "Trailer");
  link1.append(btn1);

  document.querySelector(".favlist").append(card_div1);
}
