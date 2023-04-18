import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {    
	const [veggies, setVeggies] = useState([]);
  	useEffect(() => {
		getVeggies();
  	},[]);

	const getVeggies = async () => {
		const check = localStorage.getItem('veggies');
		if(check) {
	  	setVeggies(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=9&`);
			const data = await api.json();
			setVeggies(data.recipes);
			console.log(data.recipes);
			localStorage.setItem('veggies', JSON.stringify(data.recipes));
		} 
	};

	return (
		<Wrapper>
	  		<h3>Veggie Recipes</h3>                    
			<Splide options={{
				perPage:3,
				arrows: false,
				pagination: false,
				drag: 'free',
				gap: '5rem',
			}}>
				{veggies.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							<Card>
								<Link to={'/recipe/'+ recipe.id}>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
								</Link>
								<Gradient />
							</Card>
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
	min-height:20rem;
	border-radius:2rem;
	position:relative;
	overflow:hidden;

	img {
		border-radius:.25rem;
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
}
`

const Gradient = styled.div`
	z-index:3;
	position:absolute;
	width:100%;
	height:100%;
	background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie