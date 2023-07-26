import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
    background: var(--lightGreen);
`;

export const Logo = styled(Link)`
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
export const Nav = styled.div`
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
`;

export const SpoonLogo = styled.div`
    height:35px;
    display:flex;
    justify-content:space-between;
    gap:5px;
    a {
        text-decoration:none;
        align-self:center;
        @media(max-width:992px) {
            display:none;
        }
    }

    img {
        max-height:35px;
        @media(max-width:992px) {
            display:none;
        }
    }
`;