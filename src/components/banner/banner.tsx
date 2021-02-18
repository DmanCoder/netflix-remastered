import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../redux/store/store';
// import { connect } from 'react-redux';

// Redux actions
import allActions from '../../redux/actions/allActions';

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = () => {
  const dispatch = useDispatch();
  const { moviesActions } = allActions;
  const { moviesRXS } = useSelector((state: RootStore) => state);

  useEffect(() => {
    // Get up coming movies
    dispatch(moviesActions.getUpComingMoviesAXN());
  }, []);
  return (
    <div>
      <h3>testing</h3>
    </div>
  );
};

export default Banner;
