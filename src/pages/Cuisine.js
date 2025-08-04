import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaClock, FaUserFriends, FaListUl } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}&addRecipeInformation=true`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => (
        <Card to={`/recipe/${item.id}`} key={item.id}>
          <CardImage src={item.image} alt={item.title} />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardStats>
              <span>
                <FaClock className="icon" /> {item.readyInMinutes} min
              </span>
              <span>
                <FaUserFriends className="icon" /> {item.servings} servings
              </span>
              <span>
                <FaListUl className="icon" />{" "}
                {item.extendedIngredients?.length || 0} ingredients
              </span>
            </CardStats>
            <CardDesc>
              {item.summary?.replace(/<[^>]+>/g, "").slice(0, 70)}...
            </CardDesc>
            <CardButton to={`/recipe/${item.id}`}>View Recipe</CardButton>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8rem;
  padding: 2rem 1.5rem;
  background: #f7fafc;
`;

const Card = styled(Link)`
  background: #fff;
  border-radius: 1.4rem 1.4rem 0 0;
  box-shadow: 0 6px 24px rgba(24, 36, 56, 0.13);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.19s, transform 0.19s;
  &:hover {
    box-shadow: 0 14px 34px rgba(253, 54, 126, 0.11),
      0 3px 12px rgba(24, 36, 56, 0.13);
    transform: translateY(-4px) scale(1.018);
  }
`;
const CardButton = styled(Link)`
  display: inline-block;
  margin-top: 1.1em;
  background: #fd367e;
  color: #fff;
  font-weight: 700;
  font-size: 1.04rem;
  text-decoration: none;
  border: none;
  border-radius: 0.6em;
  padding: 0.7em 1.5em;
  transition: background 0.15s;
  text-align: center;
  box-shadow: 0 2px 10px rgba(253, 54, 126, 0.09);
  &:hover {
    background: #d8246e;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 1.4rem 1.4rem 0 0;
  box-shadow: 0 1px 7px rgba(240, 105, 120, 0.05);
`;

const CardBody = styled.div`
  width: 100%;
  padding: 1.2rem 1.2rem 1.4rem 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto; /* grow to fill available vertical space */
  justify-content: space-between; /* push button to bottom */
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 1.17rem;
  font-weight: 700;
  margin: 0.2rem 0 1rem 0;
  color: #1a1a1a;
  text-align: center;
  line-height: 1;
`;

const CardStats = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-bottom: 0.7rem;
  color: #516488;
  font-size: 0.98rem;

  .icon {
    margin-right: 0.29em;
    font-size: 1.11em;
    vertical-align: -0.1em;
    color: #fd367e;
  }
`;

const CardDesc = styled.div`
  font-size: 0.99rem;
  color: #343a40;
  text-align: center;
  margin-bottom: 0.2rem;
  min-height: 2.5em;
`;

export default Cuisine;
