import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import {
  Section,
  Wrapper,
  Card,
  Gradient,
  CardImg,
  CardTitle,
} from "./VeggieStyles";

function Veggie() {
  const [veggies, setVeggies] = useState([]);
  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=9&`
      );
      const data = await api.json();
      setVeggies(data.recipes);
      console.log(data.recipes);
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
    }
  };

  return (
    <Section>
      <Wrapper>
        <h3>
          <span className="normal">Veggie </span>
          <span className="green">Recipes</span>
        </h3>
        <Splide
          options={{
            perPage: 6,
            breakpoints: {
              1200: {
                perPage: 5,
                arrows: true,
                autoHeight: true,
              },
              992: {
                perPage: 4,
                arrows: true,
              },
              768: {
                perPage: 3,
              },
              567: {
                padding: { left: "3rem", right: "3rem" },
                perPage: 2,
                arrows: true,
                pagination: true,
              },
            },
            arrows: false,
            pagination: false,
            gap: "1rem",
            padding: "1rem",
            fixedHeight: "250px",
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <Card key={recipe.id}>
                    <CardImg src={recipe.image} alt={recipe.title} />
                    <CardTitle>{recipe.title}</CardTitle>
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

export default Veggie;
