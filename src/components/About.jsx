import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <>  
            <div className = { styles.sobreMi }>
                <div>⭐⭐⭐⭐⭐</div>
                <p>
                    My name is Cristian Nicolás Castagnetto, I'm from Argentina, 26 years-old, aspiring to be a great software developer. <br/> Currently attending the 'SoyHenry' bootcamp, that's where I created this weather SinglePageApplication using: <br/> HTML • JSX • React-JavaScript • Redux • CSS 
                    <hr />
                    Find me on <a href="https://www.linkedin.com/in/cristian-nicol%C3%A1s-castagnetto-1605981a4/" target="_BLANK" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/cNikoc" target="_BLANK" rel="noreferrer">GitHub</a>! Thanks for visiting. 
                </p>
            </div>
        </>
    );
};

export default About;