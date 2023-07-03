# Flatdango

## By Patience Mugambi

This repository contains a web application called Flatdango that allows users to purchase movie tickets from Flatiron Movie Theater.

## Table of Contents
- Description
- Installation Requirements
- Technology Used
- Usage
- API Reference
- Contributing
- License
- Author's Info

## Description
Flatdango is a web application built using JavaScript. It fetches movie data from a local server running JSON DB server. The application allows users to view movie details, including the poster, title, runtime, showtime, and available tickets. Users can also buy tickets for a movie, with the number of available tickets decreasing accordingly. The application includes a menu of all movies, and users can click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.

## Installation Requirements
To run Flatdango, you need the following:

- A computer or any device with a web browser
- Access to the Internet

## Technology Used
Flatdango is built using the following technologies:

- JavaScript: Used for the front-end functionality of the application.
- HTML: Used for structuring the web pages.
- CSS: Used for styling the web pages.

## Usage
To use Flatdango, you can visit the live website at https://patiencemugambi.github.io/Flatdango/

Alternatively, you can follow these steps to run the application locally:

- Clone the repository to your local machine or download the source code.
- Open the project in a text editor or IDE of your choice.
- Start a local server to serve the JSON data by running a JSON DB server with the provided db.json file.
- Open the index.html file in a web browser.
- The movie details for the first movie will be displayed by default. The menu shows all available movies.
- Click on a movie in the menu to see its details displayed on the page.
- To buy a ticket, click the "Buy Ticket" button. The number of available tickets will decrease accordingly.

## API Reference
Flatdango fetches movie data from a local server running JSON DB server. The following endpoints are used to retrieve the movie data:

- GET /films/1: Fetches the details of the first movie.
- GET /films: Fetches the list of all movies.

## Contributing
Contributions to Flatdango are welcome. If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).


## Author's Info
- LinkedIn: [Patience Mugambi](https://www.linkedin.com/feed/)


