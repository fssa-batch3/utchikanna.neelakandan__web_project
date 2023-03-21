// comment send
let commenter;
let showComment = document.getElementById("showComment");
showComment.addEventListener("click", function (event) {
  event.preventDefault();

  let user_email = JSON.parse(localStorage.getItem("details"));

  let user_details = JSON.parse(localStorage.getItem("user"));
  console.log(user_details);
  let get_obj = user_details.find(function (user_obj) {
    let check_email = user_obj["email"];
    if (user_email === check_email) {
      return true;
    }
  });
  console.log(get_obj);
  let input = document.getElementById("comment-input").value;
  let commenter_name = get_obj["userName"];
  let comment_img = get_obj["image"];

  let comment_id = Date.now();

  let commenter = {
    input,
    comment_id,
    user_email,
    get_movie_id,
    commenter_name,
    comment_img,
    current_time: moment().format("DD-MMM-YYYY hh:mm A"),
  };
  let comments = [];

  if (localStorage.getItem("comments") != null) {
    comments = JSON.parse(localStorage.getItem("comments"));
    console.log(comments);
  }

  comments.push(commenter);

  localStorage.setItem("comments", JSON.stringify(comments));

  location.reload();
});

// show comments

let set = [];
let comm = JSON.parse(localStorage.getItem("comments"));
for (let i = 0; i < comm.length; i++) {
  let chech_m = comm[i]["get_movie_id"];
  if (chech_m == get_movie_id) {
    set.push(comm[i]);
  }
}
console.log(set);

user_email = JSON.parse(localStorage.getItem("details"));

let count = 0;

const todayDate = moment();
console.log(todayDate);

let times = moment("10032023", "DDMMYYYY").fromNow();

for (let i = 0; i < set.length; i++) {
  const momentTime = moment(set[i]["current_time"]);

  const diffInDays = moment().diff(momentTime, "days");
  let formattedDateTime;
  if (diffInDays > 1) {
    formattedDateTime = momentTime.format("DD-MMM-YYYY h:mm A");
  } else {
    formattedDateTime = momentTime.fromNow();
  }
  count++;

  let final = document.createElement("div");
  final.setAttribute("class", "comment_fin");

  let whole = document.createElement("div");
  whole.setAttribute("class", "comment_div");
  final.append(whole);

  let span1 = document.createElement("span");
  span1.setAttribute("class", "times");
  span1.innerText = formattedDateTime;
  final.append(span1);

  let image = document.createElement("img");
  image.setAttribute("class", "commenter_img");
  image.src = set[i]["comment_img"];
  whole.append(image);

  let name = document.createElement("h2");
  name.setAttribute("class", "commenter_name");
  name.innerText = set[i]["commenter_name"];
  whole.append(name);

  let span = document.createElement("span");
  whole.append(span);

  let iTag = document.createElement("i");
  iTag.setAttribute("id", "icon");
  iTag.setAttribute("onclick", "likeBtn(this)");
  iTag.setAttribute("class", "fa fa-thumbs-o-up");
  span.append(iTag);

  if (user_email == set[i]["user_email"]) {
    let edit = document.createElement("a");
    edit.setAttribute("id", "comment_edit");
    edit.setAttribute("class", "comments_edit");
    edit.setAttribute("onclick", "edit(" + set[i]["comment_id"] + ")");
    edit.innerText = "Edit";
    whole.append(edit);

    let dele = document.createElement("a");
    dele.setAttribute("id", "comment_delete");
    dele.setAttribute("class", "comments_delete");
    dele.setAttribute("onclick", "dele(" + set[i]["comment_id"] + ")");
    dele.innerText = "Delete";
    whole.append(dele);
  }

  let comments = document.createElement("div");
  comments.setAttribute("class", "comment_one");

  final.append(comments);

  let div3 = document.createElement("div");
  div3.setAttribute("class", "comment_input");
  div3.setAttribute("id", set[i]["comment_id"]);
  final.append(div3);

  let input = document.createElement("input");
  input.setAttribute("class", "new_input");
  input.setAttribute("id", count);
  input.setAttribute("type", "text");
  input.value = set[i]["input"];
  div3.append(input);

  let btn2 = document.createElement("button");
  btn2.setAttribute(
    "onclick",
    "input(" + count + "," + set[i]["comment_id"] + ")"
  );
  btn2.setAttribute("class", "input_btn");
  btn2.innerText = "Submit";
  div3.append(btn2);

  let inpu = document.createElement("span");
  inpu.setAttribute("class", "comment_input1");
  inpu.innerText = set[i]["input"];
  comments.append(inpu);

  document.querySelector(".comment_con").prepend(final);
}

// like button

function likeBtn(x) {
  x.classList.toggle("fa-thumbs-up");
}

console.log(rate_count);

function edit(x) {
  let get_class = document.getElementsByClassName("comment_input");
  for (let i = 0; i < get_class.length; i++) {
    get_class[i].style.display = "none";
  }
  let single_input = document.getElementById(x);
  single_input.style.display = "block";
}

function input(x, id) {
  let input = document.getElementById(x).value;

  console.log(input);
  let newObj = { input };

  let arr = JSON.parse(localStorage.getItem("comments"));
  let up = arr.find(function (e) {
    if (id === e["comment_id"]) {
      return true;
    }
  });
  let update = Object.assign(up, newObj);
  let ind = arr.indexOf(up);
  arr[ind] = update;
  localStorage.setItem("comments", JSON.stringify(arr));
  location.reload();
}

function dele(id) {
  let arr = JSON.parse(localStorage.getItem("comments"));
  let up = arr.find(function (e) {
    if (id === e["comment_id"]) {
      return true;
    }
  });
  let ind = arr.indexOf(up);
  arr.splice(ind, 1);
  localStorage.setItem("comments", JSON.stringify(arr));
  location.reload();
}
