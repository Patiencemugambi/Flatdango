document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const posterElement = document.getElementById('poster');
    const titleElement = document.getElementById('title');
    const runtimeElement = document.getElementById('runtime');
    const showtimeElement = document.getElementById('showtime');
    const availableTicketsElement = document.getElementById('available-tickets');
  
    // Fetch the movie data from the server
    fetch('http://localhost:3000/films/1')
      .then(response => response.json())
      .then(movie => {
        // Update the DOM elements with the movie details
        posterElement.src = movie.poster;
        titleElement.textContent = movie.title;
        runtimeElement.textContent = `Runtime: ${movie.runtime} minutes`;
        showtimeElement.textContent = `Showtime: ${movie.showtime}`;
  
        // Calculate the number of available tickets
        const availableTickets = movie.capacity - movie.tickets_sold;
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
      })
      .catch(error => console.error('Error:', error));
  });
  