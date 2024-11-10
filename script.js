// Movie data array (in a real-world app, this could come from a database or API)
const movies = [
    {
        title: 'Inception',
        description: 'A mind-bending thriller directed by Christopher Nolan.',
        image: 'https://example.com/inception.jpg', // Replace with actual movie poster
        downloadLink: 'https://example.com/inception-download'
    },
    {
        title: 'The Matrix',
        description: 'A hacker discovers the truth about the world around him.',
        image: 'https://example.com/matrix.jpg', // Replace with actual movie poster
        downloadLink: 'https://example.com/matrix-download'
    },
    {
        title: 'Interstellar',
        description: 'A group of explorers travel through a wormhole in space.',
        image: 'https://example.com/interstellar.jpg', // Replace with actual movie poster
        downloadLink: 'https://example.com/interstellar-download'
    },
    // Add more movies as needed
];

// Function to display movies
function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear existing movies

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <a href="${movie.downloadLink}" target="_blank">Download Now</a>
        `;

        movieList.appendChild(movieItem);
    });
}

// Function to search movies
function searchMovies() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.description.toLowerCase().includes(searchTerm)
    );

    // Re-render the movie list with filtered movies
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear existing movies
    filteredMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <a href="${movie.downloadLink}" target="_blank">Download Now</a>
        `;

        movieList.appendChild(movieItem);
    });
}

// Initialize the movie list on page load
window.onload = displayMovies;
