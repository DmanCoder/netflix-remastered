import React, { useEffect, Fragment } from 'react';

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

// import { getUpComingMoviesAXN } from './redux/actions/movies/moviesActions';

// Components
import Banner from './components/banner/banner';

// Assets

// interface IAppProps {}

const App: React.FC = () => {
  useEffect(() => {
    // getUpComingMoviesAXN();
  }, []);

  return (
    <Fragment>
      <Banner />
    </Fragment>
  );
};

export default App;
