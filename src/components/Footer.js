import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p>My Movies List is a <Link to="/about">portfolio project</Link>
            created by <a href="https://github.com/itamarc">itamarc</a>.</p>
        </footer>
    );
}

export default Footer;
