import axios from 'axios';

const dbURL = 'https://api.themoviedb.org/3';

// AXIOS INSTANCE: BASE URL FOR THE MOVIE DATA BASE
const dbAPI = axios.create({
  baseURL: dbURL,
});

export { dbAPI, dbURL };
