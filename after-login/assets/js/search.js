//search option
try {
  const searchbar = document.getElementById("searchbar");
  const cards = document.getElementsByClassName("box");

  searchbar.addEventListener("input", () => {
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (
        element.innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
} catch (error) {
  console.error("Error in searchbar functionality:", error);
}
