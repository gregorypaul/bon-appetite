import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  padding: 80px 60px;
  background: #24262f;
  width: 100%;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  grid-column-gap: 100px;
  p {
    margin: 0;
    padding: 0;
    color: rgb(188, 195, 203);
  }
`;

export const FooterLink = styled.a`
  color: rgb(188, 195, 203);
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #fff;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.h4`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
  font-weight: bold;
  padding-right: 30px;
  letter-spacing: -1px;
`;

export const Horizontal = styled.hr`
  border-color: rgb(188, 195, 203);
  width: 100%;
`;

export const Copyright = styled.div`
  display: flex;
  text-align: left;
  color: rgb(188, 195, 203);
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    display: block;
    line-height: 30px;
  }
  align-items: center;
  padding: 5px 0;
  div {
    margin-left: auto;
  }
  img {
    max-width: 100%;
    display: block;
    height: 100%;
    object-fit: contain;
    max-height: 50px;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #9aa0a6;
  letter-spacing: -2px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
