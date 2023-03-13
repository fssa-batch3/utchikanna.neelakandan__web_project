let card = [];

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

for (let i = 0; i < create_card.length; i++) {
  card.push(create_card[i]);
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

  // button

  edit_btn = document.createElement("a");
  //   edit_btn.setAttribute("href", card[i][""]);
  edit_btn.setAttribute("class", "btn1");
  edit_btn.setAttribute("id", card[i]["id"]);
  edit_btn.setAttribute("href", "./editFrom.html?id=" + card[i]["id"]);
  edit_btn.innerText = "Edit";
  card_div.append(edit_btn);

  document.querySelector(".menu").append(card_div);
  console.log(edit_btn);
}

let movieTitle = document.getElementById("movie_title").value;
let trailer = document.getElementById("trailer").value;
let rateOfTheMovie = document.getElementById("rateOfTheMovie").value;
let contentOfMovie = document.getElementById("contentOfMovie").value;
let releaseDate = document.getElementById("releaseDate").value;
let directorLink = document.getElementById("directorLink").value;
let mDirectorLink = document.getElementById("mDirectorLink").value;
let actor_wiki1 = document.getElementById("actor_wiki1").value;
let actor_img1 = document.getElementById("actor_img1").value;
let actor_name1 = document.getElementById("actor_name1").value;
let actor_wiki2 = document.getElementById("actor_wiki2").value;
let actor_img2 = document.getElementById("actor_img2").value;
let actor_name2 = document.getElementById("actor_name2").value;
let actor_wiki3 = document.getElementById("actor_wiki3").value;
let actor_img3 = document.getElementById("actor_img3").value;
let actor_name3 = document.getElementById("actor_name3").value;
let actor_wiki4 = document.getElementById("actor_wiki4").value;
let actor_img4 = document.getElementById("actor_img4").value;
let actor_name4 = document.getElementById("actor_name4").value;
let actor_wiki5 = document.getElementById("actor_wiki5").value;
let actor_img5 = document.getElementById("actor_img5").value;
let actor_name5 = document.getElementById("actor_name5").value;
let actor_wiki6 = document.getElementById("actor_wiki6").value;
let actor_img6 = document.getElementById("actor_img6").value;
let actor_name6 = document.getElementById("actor_name6").value;
let actor_wiki7 = document.getElementById("actor_wiki7").value;
let actor_img7 = document.getElementById("actor_img7").value;
let actor_name7 = document.getElementById("actor_name7").value;
let award_wiki = document.getElementById("award_wiki").value;
let movie_link = document.getElementById("movie_link").value;
