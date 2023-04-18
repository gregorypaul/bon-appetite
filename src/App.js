import React from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to ={'/'}>Bon Apetit</Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}
const Menu = styled.div`
    display:flex;
    justify-content:flex-start;
    flex:0 0 33%;
`
const Logo = styled(Link)`
    text-decoration:none;
    font-size:1.5rem;
    font-weight:400;
    font-family: 'Lobster Two', cursive;   
`
const Nav = styled.div`
    padding:4rem 0;
    display:flex;
    justify-content:flex-start;
    align-items:center; 
    svg {
        font-size:1.5rem;  
    }
`
;
export default App;
