import { useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from './context';
import AuthService from '../services/AuthService';

function RequireAuth({ children }) {
    const auth = useContext(AuthContext);
    let location = useLocation();

    if (!auth.userData) {
      AuthService.getCurrentUser()
        .then(userData => {
          auth.login(userData);
        }).catch(error => {
          auth.logout();
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
    const [userData, setUserData] = useState({});
    const [authenticated, setAuthenticated] = useState(false);

    let login = (user) => {
      setUserData(user);
      setAuthenticated(true);
    };

    let logout = () => {
      setUserData({});
      setAuthenticated(false);
      AuthService.logout();
    };

    let value = { userData, authenticated, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, RequireAuth };
