import React from "react"
import Category from "../components/Category";
import Home from "./Home"
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

const Pages = () => {
    let location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes useLocation={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />}/>
                <Route path="/recipe/:name" element={<Recipe />}/>
            </Routes>
        </AnimatePresence>
    );
}

export default Pages