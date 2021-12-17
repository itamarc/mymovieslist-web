import React from 'react';

import Menu from './Menu';

function Header() {
    return (
        <header>
            <h1><img src="/mml-logo120.png" alt="My Movies List" /> My Movies List</h1>
            <Menu />
        </header>
    );
}

export default Header;
