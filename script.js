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
  


const filmsList = document.getElementById('films');

// Make a GET request to retrieve the film data
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // Iterate over the film data and create list items
    const films = data.map(film => {
      const listItem = document.createElement('li');
      listItem.classList.add('film', 'item'); // Add classes to the list item

      // Create the content for each film
      listItem.innerHTML = `
        <img src="${film.poster}" alt="${film.title}" />
        <div>
          <h3>${film.title}</h3>
          <p>${film.description}</p>
          <p>Showtime: ${film.showtime}</p>
          <p>Tickets Sold: ${film.tickets_sold}</p>
        </div>
      `;

      return listItem;
    });

    // Append the film list items to the films list element
    films.forEach(film => {
      filmsList.appendChild(film);
    });
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });


