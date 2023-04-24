// feedback send

let commenter;
let showComment = document.getElementById("showFeedback");
showComment.addEventListener("click", function (event) {
  event.preventDefault();

  let user_email = JSON.parse(localStorage.getItem("details"));

  let user_details = JSON.parse(localStorage.getItem("user"));
  console.log(user_details);
  let emailId = document.getElementById("email").value;

  let get_obj = user_details.find(function (user_obj) {
    let check_email = user_obj["email"];
    if (user_email === check_email) {
      return true;
    }
  });
  console.log(emailId);
  if (emailId === user_email) {
    let feedback = document.getElementById("feed").value;
    let commenter_name = get_obj["fname"] + " " + get_obj["lname"];
    let comment_img = get_obj["image"];

    let feedback_id = Date.now();

    let commenter = {
      feedback,
      feedback_id,
      user_email,
      commenter_name,
      comment_img,
      // current_time: moment().format("DD-MMM-YYYY hh:mm A"),
    };
    let feedbacks = [];

    if (localStorage.getItem("feedbacks") != null) {
      feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
      console.log(feedbacks);
    }

    feedbacks.push(commenter);

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    location.reload();
  } else {
    alert("Your email id is miss match");
  }
});

// show feedbacks

let feed = JSON.parse(localStorage.getItem("feedbacks"));

user_email = JSON.parse(localStorage.getItem("details"));

let count = 0;

// const todayDate = moment();
// console.log(todayDate);

// let times = moment("10032023", "DDMMYYYY").fromNow();

for (let i = 0; i < feed.length; i++) {
  //   const momentTime = moment(feed[i]["current_time"]);

  //   const diffInDays = moment().diff(momentTime, "days");
  //   let formattedDateTime;
  //   if (diffInDays > 1) {
  //     formattedDateTime = momentTime.format("DD-MMM-YYYY h:mm A");
  //   } else {
  //     formattedDateTime = momentTime.fromNow();
  //   }
  count++;

  let final = document.createElement("div");
  final.setAttribute("class", "comment_fin");

  let whole = document.createElement("div");
  whole.setAttribute("class", "comment_div");
  final.append(whole);

  //   let span1 = document.createElement("span");
  //   span1.setAttribute("class", "times");
  //   span1.innerText = formattedDateTime;
  //   final.append(span1);

  let image = document.createElement("img");
  image.setAttribute("class", "commenter_img");
  image.src = feed[i]["comment_img"];
  whole.append(image);

  let name = document.createElement("h2");
  name.setAttribute("class", "commenter_name");
  name.innerText = feed[i]["commenter_name"];
  whole.append(name);

  //   let span = document.createElement("span");
  //   whole.append(span);

  //   let iTag = document.createElement("i");
  //   iTag.setAttribute("id", "icon");
  //   iTag.setAttribute("onclick", "likeBtn(this)");
  //   iTag.setAttribute("class", "fa fa-thumbs-o-up");
  //   span.append(iTag);

  if (user_email == feed[i]["user_email"]) {
    let edit = document.createElement("a");
    edit.setAttribute("id", "comment_edit");
    edit.setAttribute("class", "comments_edit");
    edit.setAttribute("onclick", "edit(" + feed[i]["feedback_id"] + ")");
    edit.innerText = "Edit";
    whole.append(edit);

    let dele = document.createElement("a");
    dele.setAttribute("id", "comment_delete");
    dele.setAttribute("class", "comments_delete");
    dele.setAttribute("onclick", "dele(" + feed[i]["feedback_id"] + ")");
    dele.innerText = "Delete";
    whole.append(dele);
  }

  let comments = document.createElement("div");
  comments.setAttribute("class", "comment_one");

  final.append(comments);

  let div3 = document.createElement("div");
  div3.setAttribute("class", "comment_input");
  div3.setAttribute("id", feed[i]["feedback_id"]);
  final.append(div3);

  let input = document.createElement("input");
  input.setAttribute("class", "new_input");
  input.setAttribute("id", count);
  input.setAttribute("type", "text");
  input.value = feed[i]["feedback"];
  div3.append(input);

  let btn2 = document.createElement("button");
  btn2.setAttribute(
    "onclick",
    "input(" + count + "," + feed[i]["feedback_id"] + ")"
  );
  btn2.setAttribute("class", "input_btn");
  btn2.innerText = "Submit";
  div3.append(btn2);

  let inpu = document.createElement("span");
  inpu.setAttribute("class", "comment_input1");
  inpu.innerText = feed[i]["feedback"];
  comments.append(inpu);

  document.querySelector(".comment_con").prepend(final);
}

// like button

// function likeBtn(x) {
//   x.classList.toggle("fa-thumbs-up");
// }

// console.log(rate_count);

// edit comment

function edit(x) {
  let get_class = document.getElementsByClassName("comment_input");
  for (let i = 0; i < get_class.length; i++) {
    get_class[i].style.display = "none";
  }
  let single_input = document.getElementById(x);
  single_input.style.display = "block";
}

// get comment from data base

function input(x, id) {
  let feedback = document.getElementById(x).value;

  console.log(feedback);
  let newObj = { feedback };

  let arr = JSON.parse(localStorage.getItem("feedbacks"));
  let up = arr.find(function (e) {
    if (id === e["feedback_id"]) {
      return true;
    }
  });
  console.log(up);
  let update = Object.assign(up, newObj);
  console.log(update);
  let ind = arr.indexOf(up);
  arr[ind] = update;
  localStorage.setItem("feedbacks", JSON.stringify(arr));
  location.reload();
}

function dele(id) {
  let arr = JSON.parse(localStorage.getItem("feedbacks"));
  let up = arr.find(function (e) {
    if (id === e["feedback_id"]) {
      return true;
    }
  });
  let ind = arr.indexOf(up);
  arr.splice(ind, 1);
  localStorage.setItem("feedbacks", JSON.stringify(arr));
  location.reload();
}
