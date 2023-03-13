// const commentForm = document.getElementById('comment-form');
//   const commentsSection = document.getElementById('comments');

//   commentForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const comment = e.target.comment.value;

//     // Create new comment element
//     const newComment = document.createElement('div');
//     newComment.classList.add('comment');
//     newComment.innerHTML = `
//       <h4>${name}</h4>
//       <p>${comment}</p>
//       <span>${email}</span>
//     `;

//     // Add new comment to the comments section
//     commentsSection.appendChild(newComment);

//     // Reset form
//     commentForm.reset();
//   });
