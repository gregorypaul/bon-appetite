import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
// import Tilt from "react-parallax-tilt";
import {Section, Wrapper, Card, Gradient } from "./PopularStyles";

function MostPopular () {    

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
	    const check = localStorage.getItem('popular');
            if(check) {
            setPopular(JSON.parse(check));
            } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            setPopular(data.recipes);
            console.log(data.recipes);
            localStorage.setItem('popular', JSON.stringify(data.recipes));
        } 
    };
  return (
        <Section>
            <Wrapper>
                <h3><span className="normal">Popular </span><span className="green">Recipes</span></h3>                    
                <Splide options={{
                    perPage:6,
                    breakpoints: {
                        992: {
                        perPage:4 ,
                        },   
                        768: {
                            perPage: 3,
                        },
                        567: {
                            padding: { left: '3rem', right: '3rem' },
                            perPage: 2,
                            arrows: true,
                            pagination: true,
                        },
                    },
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem',
                    
                }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Link to={'/recipe/'+ recipe.id}>
                                <Card key={recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                    <Gradient /> 
                                </Card>
                            </Link>
                        </SplideSlide>
                    );
                })}	
                </Splide>
            </Wrapper>
        </Section>
  );
}
export default MostPopular