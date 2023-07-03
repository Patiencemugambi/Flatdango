document.addEventListener('DOMContentLoaded', () => {
  // Get references to the DOM elements
  const posterElement = document.getElementById('poster');
  const titleElement = document.getElementById('title');
  const runtimeElement = document.getElementById('runtime');
  const showtimeElement = document.getElementById('showtime');
  const availableTicketsElement = document.getElementById('available-tickets');
  const buyTicketButton = document.getElementById('buy-ticket');

  let availableTickets; // Declare the availableTickets variable

  const fetchMovieDetails = (filmId) => {
    // Fetch the movie data from the server
    fetch(`http://localhost:3000/films/${filmId}`)
      .then(response => response.json())
      .then(movie => {
        // Update the DOM elements with the movie details
        posterElement.src = movie.poster;
        titleElement.textContent = movie.title;
        runtimeElement.textContent = `Runtime: ${movie.runtime} minutes`;
        showtimeElement.textContent = `Showtime: ${movie.showtime}`;

        // Calculate the number of available tickets
        availableTickets = movie.capacity - movie.tickets_sold;
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;

        // Enable or disable the buy button based on the availability of tickets
        buyTicketButton.disabled = availableTickets === 0;
      })
      .catch(error => console.error('Error:', error));
  };

  // Fetch the movie details for the first movie by default
  fetchMovieDetails(1);

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

        // Add click event listener to the list item
        listItem.addEventListener('click', () => {
        //   // Fetch movie details for the clicked film
        //   fetchMovieDetails(film.id);
        // });


              // Remove the active class from all list items
              const allListItems = document.querySelectorAll('.film.item');
              allListItems.forEach(item => {
                item.classList.remove('active');
              });
    
              // Add the active class to the clicked list item
              listItem.classList.add('active');
    
              // Fetch movie details for the clicked film
              fetchMovieDetails(film.id);
            });

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

  // Buy Button
  buyTicketButton.addEventListener('click', () => {
    if (availableTickets > 0) {
      // Decrease the number of available tickets
      const updatedTickets = availableTickets - 1;

      // Update the displayed number of available tickets on the frontend
      availableTicketsElement.textContent = `Available Tickets: ${updatedTickets}`;

      // Update the value of availableTickets for future clicks
      availableTickets = updatedTickets;

      // Proceed with the ticket purchase process
    } else {
      // Display an error message or disable the "Buy Ticket" button to indicate that the showing is sold out
      alert("Sorry, all the tickets have been sold out for this showing.");
    }
  });
});
