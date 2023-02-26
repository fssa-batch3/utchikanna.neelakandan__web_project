let card = [
    {
      image: "../assets/images/avatar.jpg",
      rate: 8.5,
      title: "Avatar-2",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/connect.jpg",
      rate: 8,
      title: "Connect",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/Laththi.jpg",
      rate: 8.5,
      title: "Laththi",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/sembi.jpg",
      rate: 7.5,
      title: "Sembi",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/gatta.jpg",
      rate: 8.5,
      title: "Gatta Kusthi",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/raagi.jpg",
      rate: 7,
      title: "Raagi",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/omg.jpg",
      rate: 7.5,
      title: "OMG",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
    },
    {
      image: "../assets/images/driver.jpg",
      rate: 8.5,
      title: "Driver Jamuna",
      link: "https://in.bookmyshow.com/buytickets/avatar-the-way-of-water-imax-3d-chennai/movie-chen-ET00342442-MT/20221229",
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
    btn.innerText = "Show Times";
    link.append(btn);

    document.querySelector(".menu").append(card_div);
  }