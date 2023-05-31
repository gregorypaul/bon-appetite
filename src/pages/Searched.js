import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
        console.log(params.search);
    },[params.search]);

    return(
        <>
        <Grid>
            {searchedRecipes.map((item) =>{
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>   
                    </Card> 
                )
            })}
        </Grid>
        <Footer />
        </>
    );  
}
const Grid = styled.div`
    grid-gap:2rem;
    padding:30px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding-top:60px;
`;

const Card = styled.div`
    text-align:center;
    background: #ff9200;
    width:190px;
    min-height:200px;
    max-height:200px;
    border:1px solid #000;
    display:flex;

    img {
        max-width:100%;
        border-radius:0;
    }

    a {
        text-decoration:none;
    }

    h4 {
        font-size:1rem;
        font-family:'Poppins', sans-serif;
        margin:0;
        color:#fff;
        line-height:20px;
        padding:10px;
        display:flex;
        align-items:center;
        justify-content: center;
        text-align:center;
        justify-items: center;
    }
`;
  
export default Searched