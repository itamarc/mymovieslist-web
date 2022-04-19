import { useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from './context';
import AuthService from '../services/AuthService';

/**
 * This represents some generic auth provider API, like Firebase.
 */
const googleAuthProvider = {
    signin(callback) {
      setTimeout(callback, 100); // fake async
      // check if user is registered and get its data from the server
    },
    signout(callback) {
      AuthService.logout();
    }
};

function RequireAuth({ children }) {
    const auth = useContext(AuthContext);
    let location = useLocation();

    if (!auth.userData) {
      AuthService.getCurrentUser()
        .then(userData => {
          auth.userData = userData;
        }).catch(error => {
          auth.userData = null;
          AuthService.logout();
          console.error(error);
          // Redirect them to the /login page, but save the current location they were
          // trying to go to when they were redirected. This allows us to send them
          // along to that page after they login, which is a nicer user experience
          // than dropping them off on the home page.
        });
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

function AuthProvider({ children }) {
    let [user, setUser] = useState(null);
    let [userData, setUserData] = useState({});

    let signin = (newUser, callback) => {
      return googleAuthProvider.signin(() => {
        setUser(newUser.name);
        setUserData(newUser);
        callback();
      });
    };

    let signout = (callback) => {
      setUserData({});
      return googleAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };

    let value = { user, userData, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, RequireAuth };
