import React from "react";
import About from '../component/About';
import Basic from '../component/Basic';
import Project from '../component/Project';
import Contact from "../component/Contact";

const Home = () => {
    return (
      
        <div className="">
            <section id="basic">
                <Basic />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Home;
