import { createContext } from 'react';

let AuthContext = createContext({ authenticated: false, username: '' });

export { AuthContext };
