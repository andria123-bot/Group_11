const searchBtn = document.getElementById('searchBtn');
const movieInput = document.getElementById('movieInput');
const movieInfoDiv = document.getElementById('movieInfo');

const apiKey = 'fe36b1f4';

const fetchInfo = async (movieName) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === "True") {
      movieInfoDiv.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="${data.Title}">
        <p>Year: ${data.Year}</p>
        <p>Rated: ${data.Rated}</p>
        <p>Genre: ${data.Genre}</p>
        <p>Director: ${data.Director}</p>
        <p>Actors: ${data.Actors}</p>
        <p>Plot: ${data.Plot}</p>
      `;
    } else {
      movieInfoDiv.innerHTML = `<p>Movie not found!</p>`;
    }
  } catch (error) {
    movieInfoDiv.innerHTML = `<p>Error detecting movie data. Please try again!</p>`;
    console.error(error);
  }
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const movieName = movieInput.value.trim();
  if (movieName) {
    fetchInfo(movieName);
  } else {
    movieInfoDiv.innerHTML = `<p>Please enter a movie name.</p>`;
  }
});
