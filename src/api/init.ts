import axios from 'axios';

// Base URL string
const dbURL: string = 'https://api.themoviedb.org/3';

// Environment variables
const { REACT_APP_TMBD_KEY } = process.env;

// AXIOS INSTANCE: BASE URL FOR THE MOVIE DATA BASE
const dbAPI = axios.create({
  baseURL: dbURL,
});

export { dbAPI, dbURL, REACT_APP_TMBD_KEY };
