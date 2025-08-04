import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 567px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  transform: scale(0.8);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  border: 1px solid #ccc;
  padding: 20px;
  min-width: 120px;
  background: #fff;
  @media (max-width: 567px) {
    min-width: 0;
    min-height: 75px;
    padding: 12px 0px;
    border-radius: 1rem;
    svg {
      font-size: 2rem;
    }
    h4 {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  h4 {
    font-size: 1rem;
    color: var(--green);
    margin: 0;
    line-height: 3rem;
  }

  svg {
    color: var(--green);
    font-size: 3rem;
    text-align: center;
  }
  &.hover {
    background: linear-gradient(to right, #08824a, #f1f9f6);

    svg {
      color: white;
    }
  }
`;
