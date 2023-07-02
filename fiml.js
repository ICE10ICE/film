const apiKey = "f9c008d9";
      const searchButton = document.getElementById("searchButton");
      const searchInput = document.getElementById("searchInput");
      const MovieTitle = document.getElementById("MovieTitle");
      const rating = document.getElementById("rating");
      const posterImage = document.getElementById("posterImage");
      const posterContainer = document.getElementById("posterContainer");

      function getRandomColor() {
        const colors = ['#black', '#f68888', '#rgb(203, 240, 146', '#7daadb', '#rgb(47, 46, 46)','rgb(249, 160, 173'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

      function displayMovieData(data) {
      movieContainer.style.display = "block"; // Show the movie container
      // Get the random color
      const randomColor = getRandomColor();
      
       // Clear the movie name input after displaying the movie information
       searchInput.value = "";

    // Apply the random color to the container
      movieContainer.style.backgroundColor = randomColor;
      MovieTitle.innerHTML = `Title : <b>${data.Title}</b>`;
      rating.innerHTML = `
        IMDB Rating : <b>${data.imdbRating}</b><br>
        IMDBID : <b>${data.imdbID}</b><br>
        Year : <b>${data.Year}</b><br>
        Director Name : <b>${data.Director}</b><br>

      `;


       // Check if the movie has a poster available
       if (data.Poster && data.Poster !== "N/A") {
        posterImage.src = data.Poster;
        posterContainer.style.display = "block"; // Show the poster container
      } else {
        posterContainer.style.display = "none"; // Hide the poster container if no poster available
      }
    }

    
    // Change the background color with every different movie display
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;



    function getAvatarMovieData() {
      const avatarMovieUrl = `https://www.omdbapi.com/?t=Avatar&apikey=f9c008d9`;
      fetch(avatarMovieUrl)
        .then((response) => response.json())
        .then((data) => {
          displayMovieData(data);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
          alert('Failed to fetch movie data. Please try again later.');
        });
    }
      
      function searchMovies() {
        const searchTitle = searchInput.value.trim();
        if (!searchTitle) {
          alert("Please enter a movie title to search.");
          return;
        }

        const searchUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(searchTitle)}&apikey=f9c008d9`;

         fetch(searchUrl)
          .then((response) => response.json())
          .then((data) => {
           if (data.Error) {
            alert(data.Error);
          } else {
            displayMovieData(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
          alert('Failed to fetch movie data. Please try again later.');
        });
    }
  
    searchButton.addEventListener("click", searchMovies);
    getAvatarMovieData();