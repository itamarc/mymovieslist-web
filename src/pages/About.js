import React from "react";

function About() {
    return (
        <div id="about">
            <h1>About</h1>
            <p>This project was created to serve as portfolio to <a href="https://github.com/itamarc">Itamar Carvalho</a>.</p>
            <p>The source code is available on <a href="https://itamarc.github.io/mymovieslist-web">GitHub</a>.</p>
            <p>The documentation is on a <a href="https://itamarc.github.io/mymovieslist">separate repository</a>.</p>
            <p>The following technologies/tools were used in this project:<br/>
                <ul>
                    <li>React</li>
                    <li>React Router Dom</li>
                    <li>Java Spring Framework</li>
                    <li>REST API</li>
                    <li>MySQL</li>
                    <li>Google OAuth</li>
                </ul>
            </p>
        </div>
    );
}

export default About;
