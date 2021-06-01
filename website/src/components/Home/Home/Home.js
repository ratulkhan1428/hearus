import React from 'react';
import Hero from '../Hero';
import NavBar from '../NavBar';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import FAQ from '../FAQ';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;