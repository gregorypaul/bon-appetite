import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import SearchBar from './components/Search';
import { GlobalStyle } from './GlobalStyles';
import { AppWrapper, Logo, Nav, SpoonLogo } from "./AppStyle";

 const App = () => {
    return (
        <>
        <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Nav>
                        <Logo to ={'/'}><span className="normal darkGrey">BON</span>APPETITE</Logo>
                        <SearchBar />  
                        <SpoonLogo>
                            <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer"><p className="green">Powered by</p></a><a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer"><img src={"./logo-simple-framed-green-gradient.svg" ? "../logo-simple-framed-green-gradient.svg" : ""} alt="spoonacular logo"/></a>
                        </SpoonLogo> 
                    </Nav>
                    <Pages />
                </BrowserRouter>
            </AppWrapper>
        </>
    );
}

export default App;