import React from 'react';

import Menu from './Menu';
import SearchForm from './SearchForm';

function Header() {
    return (
        <header>
            <h1><img src="/mml-logo120.png" alt="My Movies List" /> My Movies List</h1>
            <SearchForm />
            <Menu />
        </header>
    );
}

export default Header;
