import React, { useEffect } from 'react';

// Init
import { dbAPI, REACT_APP_TMBD_KEY } from './api/init';

interface IAppProps {}

const App: React.FC<IAppProps> = ({}) => {
  useEffect(() => {
    console.log(REACT_APP_TMBD_KEY);
    dbAPI.get(`/discover/movie?api_key=${REACT_APP_TMBD_KEY}`).then((res) => {
      console.log(res);
    });
  }, []);

  return <div></div>;
};

export default App;
