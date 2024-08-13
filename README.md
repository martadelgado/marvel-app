# Welcome to My Marvelous Marvel App

A simple React application configured with Webpack for development and production builds. The application has two views -- a character list view which fetches the list of Marvel characters and a detail view which provides additional details on the character based on ID.

## Features

- React for building user interfaces
- Webpack for bundling and compiling assets
- Babel for transpiling modern JavaScript and JSX
- CSS support for styling

## Installation

1. **Clone the repository:**

   git clone https://github.com/martadelgado/marvel-app
   cd marvel-app
2. **Install dependencies:**

   npm install


## Configuration

- Webpack: Configuration files are located in webpack.common.js and webpack.prod.js for common and production-specific settings, respectively.

- Environment Variables: You can configure environment variables using .env files or directly within Webpack's DefinePlugin.

- CSS and Assets: CSS files are handled using css-loader and style-loader. Assets like images can be added to the src directory and imported as needed.


## Architecture

```bash
.
├── src/
│   ├── components        # Common components used throughout app
│   ├── context           # Entry point for App Context
│   ├── hooks             # Hook used throughout components
│   ├── views             # Detail view and List view
|   |── index.css         # Global styles
|   |── index.js          # Entry point for React application
│   ├── App.js            # Main application component
│   ├── routes.js         # Entry point for routes
├── dist/                 # Compiled output directory
├── webpack.common.js     # Common Webpack configuration
├── webpack.prod.js       # Production Webpack configuration
├── .env                  # Environment variables
└── package.json          # Project metadata and dependencies
```

## Development

For local development, run the following command to start the development server:
### `npm start`

## Building for Production

To build the application for production, run:
### `npm run build`
