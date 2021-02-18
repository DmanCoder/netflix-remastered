import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../redux/store/store';
// import { connect } from 'react-redux';

// Redux actions
import allActions from '../../redux/actions/allActions';

// interface IBannerProps {}

const Banner: React.FC = () => {
  const dispatch = useDispatch();
  const { moviesActions } = allActions;
  const { moviesRXS } = useSelector((state: RootStore) => state);

  useEffect(() => {
    // Get up coming movies
    dispatch(moviesActions.getUpComingMoviesAXN());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Banner;
