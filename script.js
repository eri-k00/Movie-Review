const searchInput = document.querySelector("#movieSearch");

if (searchInput) {
  const movieCards = document.querySelectorAll(".movie-card");
  const noResults = document.querySelector("#noResults");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    let visibleMovies = 0;

    movieCards.forEach(function (card) {
      const movieName = card.querySelector("h3").textContent.toLowerCase();

      if (movieName.includes(searchText)) {
        card.style.display = "block";
        visibleMovies++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleMovies === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
}
