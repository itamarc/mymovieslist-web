import { useContext, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from './context';

/**
 * This represents some generic auth provider API, like Firebase.
 */
const myAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        myAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        myAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

function RequireAuth({ children }) {
    let auth = useContext(AuthContext);
    let location = useLocation();
  
    if (!auth.authenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return children;
}

function AuthProvider({ children }) {
    let [user, setUser] = useState(null);
  
    let signin = (newUser, callback) => {
      return myAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    let signout = (callback) => {
      return myAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, RequireAuth };
