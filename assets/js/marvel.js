let card = [
    {
      image: "../assets/images/loki.jpg",
      href: "#endgame",
      rate: 9.5,
      title: "Loki",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/moon.jpg",
      href: "#war",
      rate: 9,
      title: "Moon Knight",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/wanda.jpg",
      href: "#spider",
      rate: 8.5,
      title: "Wanda Vision",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/ms.jpg",
      href: "#doctor",
      rate: 8.5,
      title: "Ms Marvel",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/falcon.jpg",
      href: "#civil",
      rate: 8,
      title: "Falcon",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/she.jpg",
      href: "#thor",
      rate: 7.5,
      title: "She Hulk",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/hawkeye.jpg",
      href: "#iron",
      rate: 8.5,
      title: "Hawkeye",
      link: "https://www.hotstar.com/in/tv/house-of-the-dragon/1260110208?utm_source=gwa",
    },
    {
      image: "../assets/images/what.jpg",
      href: "#captain",
      rate: 9,
      title: "What If...?",
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
