import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    );  
}
const Grid = styled.div`
    grid-gap:2rem;
    padding:30px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`;

const Card = styled.div`
    text-align:center;
    background: var(--green);

    img {
        max-width:100%;
        border-radius:0;
    }

    a {
        text-decoration:none;
    }

    h4 {
        text-align:center;
        padding-left:1rem;
        padding-right:1rem;
        font-size:1rem;
        font-family:'Poppins', sans-serif;
        margin:0;
        padding:0;
        color:#fff;
    }
`;
  
export default Searched