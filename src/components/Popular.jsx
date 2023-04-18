import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {    
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
	<Wrapper>
	  <h3>Popular Recipes</h3>                    
		<Splide options={{
		  perPage:4,
		  arrows: false,
		  pagination: false,
		  drag: 'free',
		  gap: '5rem',
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
  );
}

const Wrapper = styled.div `
margin:4rem auto;
`

const Card = styled.div`
min-height:15rem;
border-radius:.50rem;
position:relative;
overflow:hidden;

	img {
	border-radius:1rem;
	max-width:100%;
	position:absolute;
	left:0;
	width:100%;
	height:100%;
	object-fit:cover;
	}

	p {
	position:absolute;
	z-index:10;
	left:50%;
	bottom:0%;
	transform: translate(-50%, 0%);
	color:#ffffff;
	width:100%;
	text-align:center;
	font-weight:600;
	font-size:1rem;
	height:40%;
	display:flex;
	justify-content:center;
	align-items:center;
}`

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular