import React, { useContext } from 'react';

import RegisterLoginButtonMenu from './RegisterLoginButtonMenu';
import { AuthContext } from "../nav/context";
import UserAuthenticatedButtonMenu from './UserAuthenticatedButtonMenu';

function UserButton() {
    let auth = useContext(AuthContext);

    if (auth.userData?.id) {
        return <UserAuthenticatedButtonMenu />
    } else {
        return <RegisterLoginButtonMenu />
    }
}

export default UserButton;
