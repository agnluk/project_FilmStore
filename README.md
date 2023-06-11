FilmBase
FilmBase is a simple movie search application built with React. It allows users to search for movies using the OMDb API and displays the search results in a responsive grid layout.

Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd filmbase
Install the dependencies:

Copy code
npm install
Start the development server:

sql
Copy code
npm start
Open your browser and visit http://localhost:3000 to access the application.

Usage
Upon launching the application, you will see the FilmBase logo and a search bar.

Enter a movie title in the search bar and press Enter or click the search icon.

The application will fetch movie data from the OMDb API and display the search results in a responsive grid layout.

Click on a movie card to view detailed information about the selected movie.

Dependencies
React: A JavaScript library for building user interfaces.
useState: A React hook for managing state in functional components.
useEffect: A React hook for performing side effects in functional components.
OMDb API: The Open Movie Database API for retrieving movie data.
Project Structure
The project structure follows a typical React application structure:

src/: Contains the application source code.
components/: Contains reusable React components.
FilmCard.js: Renders a movie card component.
img/: Contains image assets.
styles/: Contains CSS stylesheets.
App.css: Styles for the main App component.
App.js: The main component that represents the FilmBase application.
index.js: The entry point of the application.
API Usage
FilmBase utilizes the OMDb API (http://www.omdbapi.com/) to retrieve movie data. It uses the following endpoint:

Endpoint: http://www.omdbapi.com/
Parameters:
i: IMDb ID of the movie.
apikey: Your OMDb API key.
Please note that for security reasons, the API key used in this application is a placeholder and needs to be replaced with a valid OMDb API key obtained from the OMDb website.