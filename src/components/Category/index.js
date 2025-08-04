import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaHandPointDown } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Router } from "react-router-dom";
import { SLink, List } from "./CategoryStyles";

const Category = () => {
  return (
    <>
      <h3>
        Start Here <FaHandPointDown></FaHandPointDown>
      </h3>
      <List>
        <div>
          <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
          </SLink>
        </div>
        <div>
          <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
          </SLink>
        </div>
        <div>
          <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
          </SLink>
        </div>
        <div>
          <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>
          </SLink>
        </div>
      </List>
    </>
  );
};

export default Category;
