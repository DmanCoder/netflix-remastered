export const GET_UP_COMING_MOVIES: string = 'GET_UP_COMING_MOVIES';

export type UpComingType = {
  // API data structure
  dates: {};
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  total_pages: number;
  total_results: number;
};

// Interface - up coming movies dispatch types
export interface IUpComingMoviesSuccess {
  type: typeof GET_UP_COMING_MOVIES;
  payload: UpComingType;
}

// All Movie reducer dispatch types
export type MoviesDispatchTypes = IUpComingMoviesSuccess;

// https://www.youtube.com/watch?v=Lkng78QNWJA&ab_channel=LetsCode 16:00
// https://www.youtube.com/watch?v=WpvIihorarA&ab_channel=MaksimIvanov
