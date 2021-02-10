export const GET_UP_COMING_MOVIES: string = 'GET_UP_COMING_MOVIES';

// Interface - up coming movies dispatch types
export interface IUpComingMoviesSuccess {
  type: typeof GET_UP_COMING_MOVIES;
  payload: {
    // API data structure
  };
}

// All Movie reducer dispatch types
export type MoviesDispatchTypes = IUpComingMoviesSuccess;

// https://www.youtube.com/watch?v=Lkng78QNWJA&ab_channel=LetsCode 16:00
// https://www.youtube.com/watch?v=WpvIihorarA&ab_channel=MaksimIvanov
