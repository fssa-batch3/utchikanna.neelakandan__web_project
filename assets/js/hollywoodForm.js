let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let updates = {};

  let image_url = document.getElementById("image_url").value;
  updates["image"] = image_url;

  let rediracting = document.getElementById("rediracting").value;
  // console.log(rediracting);
  updates["href"] = rediracting;

  let rating = document.getElementById("rating").value;
  // console.log(rating);
  updates["rate"] = rating;

  let title = document.getElementById("title").value;
  // console.log(title);
  updates["title"] = title;

  let link = document.getElementById("link").value;
  // console.log(link);
  updates["link"] = link;

  console.log(updates);

  let all = [];

  if (localStorage.getItem("new_card") != null) {
    all = JSON.parse(localStorage.getItem("new_card"));
    console.log(all);
  }

  all.push(updates);

  localStorage.setItem("new_card", JSON.stringify(all));

  // window.localStorage.setItem("update_detailes", JSON.stringify(updates));

  // location.reload();

  // if (window.localStorage.getItem("update_detailes") === null) {

  // } else {
  //   let local = window.localStorage.getItem("update_detailes");
  //   let json = JSON.parse(local);
  //   json.push(updates);
  //   window.localStorage.setItem("update_detailes", JSON.stringify(json));
  // }
  location.href = "../pages/hollywood.html";
});
