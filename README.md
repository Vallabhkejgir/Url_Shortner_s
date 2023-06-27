
# URL Shortener

* This is a URL shortener project that provides token-based authentication and allows users to search for URLs. It is built using Node.js, Express.js, and MongoDB.
* Url Shortener allows users to create compact and easily shareable URLs for their long web addresses.


## Key Features

* Generate Short URLs:  The URL Shortener simplifies long URLs transforming them into shorter links. This feature helps by enhancing convenience when sharing URLs across various platforms, including social media, messaging apps, and other communication channels.

* Click Tracking: The project tracks the number of clicks recorded for each shortened URL. This helps providing valuable insights into the popularity and engagement level of their shared links.

* Search Functionality: The URL Shortener provides the users to search for shortened URLs using various criteria. Users can search by the long URL, or the associated notes, making it effortless to locate specific links.

* Token-Authentication: Token authentication enhances web application security and scalability by using tokens to validate and manage user authentication, reducing the need for server-side sessions and allowing for easy integration with third-party systems.

* Notes Addition: In addition to generating short URLs, the application allows users to add notes or descriptions along with each shortened link. This feature helps users to associate important information or context with the URLs they are shortening, facilitating better organization and future search capabilities.



## How Project Works

* Token-Authentication: Retrieves the token from multiple sources, checks for its presence, verifies its authenticity and integrity, decodes it to extract user information, and handles errors during the verification process.

* Database Storage: The entered URL and notes are stored in the MongoDB database while user email, name and hashpassword is also stored in MongoDB database. This ensures that security of data for future usage and Authentication.

* Advanced Search: The application provides a search feature implemented through a dedicated route in Node.js. Users can search for specific shortened URLs based on the long URL or associated notes. The search functionality retrieves the relevant links from the MongoDB database and displays them to the user.

* URL Shortening: The application uses the ShortID library to generate a unique and shortened URL for the entered long URL. This shortened URL is created using an algorithm that ensures uniqueness and maintainability.

## Dependancies Used

The project relies on the following dependencies:


* bcrypt: ^5.1.0

* cookie-parser: ^1.4.6

* dotenv: ^16.3.1

* ejs: ^3.1.9

* express: ^4.18.2

* jsonwebtoken: ^9.0.0

* mongoose: ^7.3.0

* nodemon: ^2.0.22

* shortid: ^2.2.16
## Deployment

To run the project, follow the instructions below:


1) Navigate to the project directory:
```bash
  cd url_shortner_s
```

2) Install the dependencies specified in the package.json file using npm:

```bash
  npm install
```

3) Create a .env file in the root directory and add the following environment variables:
```bash
DATABASE_URL=your-database-connection-url
TOKEN_KEY=your-token-key
```

Replace 'your-database-connection-url' with the link to your MongoDB database and 'your-token-key' with a secret key for token authentication.


4) To run the project type the following in terminal:
```bash
  npm run devstart
```

This will start the server on http://localhost:4000.


