import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './components/Search';
import { GlobalStyle } from './GlobalStyles';
 const App = () => {
    return (
        <>
        <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Nav>
                        <Logo to ={'/'}><span className="normal darkGrey">BON</span>APPETITE</Logo>
                        <SearchBar />  
                        <div className="spoon-logo">
                            <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer"><p className="green">Powered by</p></a><a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer"><img src="./logo-simple-framed-green-gradient.svg" alt="spoonacular logo"/></a>
                        </div> 
                    </Nav>
                    <Pages />
                </BrowserRouter>
            </AppWrapper>
        </>
    );
}
const AppWrapper = styled.div`
    background: var(--lightGreen);
`;

const Logo = styled(Link)`
    text-decoration:none;
    font-size:1.5rem;
    font-weight:700;
    font-family: 'Poppins', sans-serif;
    color:#08824A;   
    letter-spacing:-2px;
    padding-left:2rem;
    @media(max-width:768px) {
        padding:0;
    }
`
const Nav = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    padding:5px 80px;
    @media(max-width: 768px){
        padding:0 15px;
    }
    display:flex;
    background: #FFFFFF;
    z-index:10;
    border-bottom:2px solid var(--green);
    justify-content: space-between;
    align-items:center;
    height:56px;
    .spoon-logo {
        height:35px;
        display:flex;
        justify-content:space-between;
        gap:5px;
        a {
            text-decoration:none;
            align-self:center;
            @media(max-width:992px) {
                display;none;
            }
        }

        img {
            max-height:35px;
            @media(max-width:992px) {
                display;none;
            }
        }
    }
    .logo {
        max-width:100%;
    }
`;

export default App;