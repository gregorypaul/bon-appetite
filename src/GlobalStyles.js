import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
            --fontS: 1rem;
            --fontM: 1.2rem;
            --fontL: 1.5rem;
            --fontXL: 2.5rem;
            --maxWidth: 1200px;
            --white: #ffffff;
            --lightGrey: #eeeeee;
            --medGrey: #353535;
            --darkGrey: #808080;
            --lightGreen: #F1F9F6;
            --fontw-Normal: 400;
            --fontw-Bold: 800;
            --green: #08824A;
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin-top:50px;
            background: var(--white);
            min-height:100vh;
        }

        h4 {
            font-size:1.5rem;
            color:rgb(56,56,56);
            margin:0;
            line-height:3rem;
        }

        h3 {
            font-size:2rem;
            color:rgb(56,56,56);
            line-height: 2.5rem;
            letter-spacing: -1px;
            padding:0;
            margin:0 0 1rem 0;
        }

        a {
            color:rgb(56,56,56);
        }

        /* Utility classes */

        .container {
            max-width:1400px;
            margin:0 auto;
        }
            

        .green {
            color:var(--green);
        }

        .normal {
            font-weight:var(--fontw-Normal);
        }

        .bold {
            font-weight: var(--fontw-Bold);
        }

        .darkGrey {
            color: var(--darkGrey);
        }

        @media(max-width:576px) {
        .splide__track {
            overflow: visible !important;
            }
            .splide__track::before,
            .splide__track::after {
            display: none !important;
            background: none !important;
            background-image: none !important;
            opacity: 0 !important;
            content: none !important;
            width: 0 !important;
            height: 0 !important;
            }
        }
       


`;
