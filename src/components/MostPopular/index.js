import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
// import Tilt from "react-parallax-tilt";
import {
  Section,
  Wrapper,
  Card,
  Gradient,
  CardImg,
  CardTitle,
} from "./PopularStyles";

function MostPopular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
      setPopular(data.recipes);
      console.log(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };
  return (
    <Section>
      <Wrapper>
        <h3>
          <span className="normal">Popular </span>
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
                perPage: 1,
                padding: { left: "0.5rem", right: "0.5rem" }, // less padding
                arrows: true,
                pagination: true,
                gap: "0.5rem",
                autoWidth: true,
                fixedWidth: false,
                fixedHeight: false,
              },
            },
            arrows: false,
            pagination: false,
            gap: "1rem",
            padding: "1rem",
            fixedHeight: "250px",
          }}
        >
          {popular.map((recipe) => {
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
export default MostPopular;
