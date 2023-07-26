import React from "react";
import Veggies from "../components/Veggie";
import MostPopular from "../components/MostPopular";
import { motion } from "framer-motion";
import styled from 'styled-components';
import Category from "../components/Category";
import Wave from "../components/Wave";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <motion.div
            animate={{ opacity:1 }}
            initial={{ opacity:0 }}
            exit={{ opacity:0 }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <div className="info">
                    <h1>Looking for <span className="green">great cuisine</span>?</h1>
                    <Category />
                    <p>If your looking for popular cuisine or quick dinner recipes 
                    pick from some of the most popular recipes Spoonacular offers</p>
                </div>
                <div>
                    <img src="./cuisine-image.webp" alt="cuisine" />
                </div> 
            </Container>
            <Wave />
            <MostPopular />
            <Veggies />
            <Footer />
        </motion.div>
    );
}

const Container = styled.div`
    display:flex;
    justify-content: between;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
    @media(max-width:768px) {
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
    }
    gap:2rem; 
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding:2rem 0;
    .info {
        padding:0 15px;
    }
    img {
        max-width:100%;
        display:block;
        height:auto;
        max-height:500px;
        @media(max-width: 992px ) {
            max-width:75%;
            object-fit: contain;
            
        }
        @media(max-width: 768px ) {
            max-width:25%;
            margin:0 auto;
        }
    }
    h1 {
        font-size:4rem;
        @media(max-width:768px ) {
            font-size: 2.5rem;
            padding:0;
            margin:0;
        }
        margin-top:0;
        font-family: 'Poppins', sans-serif;
        line-height:1;
        margin-bottom:1.2rem;
        letter-spacing:-2px;
    }
    p {
        margin:1rem 0;
        line-height:1.5;
    }
`; 

export default Home