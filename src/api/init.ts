import axios from 'axios';

// Base URL string
const dbURL: string = 'https://api.themoviedb.org/3';

// Environment variables
const { REACT_APP_TMBD_KEY } = process.env;

// Image URL
const imgURL =
  'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';

// AXIOS INSTANCE: BASE URL FOR THE MOVIE DATA BASE
const dbAPI = axios.create({
  baseURL: dbURL,
});

export { dbAPI, dbURL, imgURL, REACT_APP_TMBD_KEY };
