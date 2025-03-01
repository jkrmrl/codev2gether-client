import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { connect } from 'react-redux';
import router from './routes';
import { autoLogin } from './actions/authActions'; 

interface AppProps {
  autoLogin: () => void; 
}

const App: React.FC<AppProps> = ({ autoLogin }) => {
  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return <RouterProvider router={router} />;
};

const mapDispatchToProps = {
  autoLogin,
};

export default connect(null, mapDispatchToProps)(App);