import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Redux actions
import { getUpComingMoviesAXN } from '../../redux/actions/movies/moviesActions';

interface IBannerProps {
  getUpComingMoviesAXN: Function;
}

interface IRootMapToStateProps {
  loadingRXS: boolean;
  moviesRXS: any;
}

const Banner: React.FC<IBannerProps> = ({ getUpComingMoviesAXN }) => {
  useEffect(() => {
    getUpComingMoviesAXN();
  }, []);
  return (
    <div>
      <h3>BANNER</h3>
    </div>
  );
};

const mapStateToProps = (state: IRootMapToStateProps) => ({
  moviesRXS: state.moviesRXS,
  loadingRXS: state.loadingRXS,
});

export default connect(mapStateToProps, {
  getUpComingMoviesAXN,
})(Banner);
