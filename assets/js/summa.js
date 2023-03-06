//   let form = document.getElementById("form");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const href = document.getElementById("href").value;
//     const images = document.getElementById("image").value;
//     const links = document.getElementById("link").value;
//     const titles = document.getElementById("title").value;
//     const ratings = document.getElementById("rate").value;
//     const id = Date.now();

//     let new_data = {
//       href,
//       images,
//       links,
//       titles,
//       ratings,
//       id,
//     };
//     // if( mail.value != user_email ){
//     //   alert("You can't change the email-id")
//     //   return
//     // }

//     let updates = Object.assign(get_obj, new_data);
//     console.log(updates);

//     let index = user_details.indexOf(get_obj);
//     console.log(index);

//     product_details[index] = updates;

//     localStorage.setItem("new_data", JSON.stringify(product_details));

//     alert("You have successfully updated your product details!");

//     location.reload();
//   });

//   // const user_email = JSON.parse(window.localStorage.getItem("details"))
//   let check = true;
//   const present_details = JSON.parse(window.localStorage.getItem("user"));
//   let get_present = user_details.find(function (user_obj) {
//     let check_email = user_obj["email"];
//     if (user_email === check_email) {
//       let fname1 = document.getElementById("name");
//       let lname1 = document.getElementById("surname");
//       let mail1 = document.getElementById("emailid");
//       let phone1 = document.getElementById("mobilenumber");
//       let dob1 = document.getElementById("dob");
//       let state1 = document.getElementById("state");
//       let country1 = document.getElementById("country");
//       let gender1 = document.getElementById("gender");

//       fname1.value = user_obj["fname"];
//       lname1.value = user_obj["lname"];
//       mail1.value = user_obj["email"];
//       phone1.value = user_obj["phone_no"];
//       dob1.value = user_obj["dob"];
//       state1.value = user_obj["state"];
//       country1.value = user_obj["country"];
//       gender1.value = user_obj["gender"];
//     }
//   });

let delete_user = document.getElementById("delete");
delete_user.addEventListener("click", function (event) {
  event.preventDefault();
  let index = product_details.indexOf(get_obj);
  let msg = confirm("Are you sure you want to delete this account");
  if (msg !== true) {
    return;
  } else {
    user_details.splice(index, 1);
    console.log(product_details);
    localStorage.setItem("new_data", JSON.stringify(product_details));
    location.reload();
  }
});
