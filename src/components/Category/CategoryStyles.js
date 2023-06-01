import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
    display:flex;
    @media(max-width: 768px) {
        justify-content: center;
    }
    .cat-container {
        display:flex;
        margin-bottom:1rem;
    	background: linear-gradient(to right, #08824A, #00A36C);
        text-align:center;
        width:80px;
        height:80px;
        border-radius:80px;
        margin:1rem 1rem 1rem 0;
        border:1px solid var(--green);
        transition: all .3s ease-in-out;
        &:hover {
            background: linear-gradient(to left, #08824A, #00A36C);
        }
    }
`;

export const SLink = styled(NavLink)`
	display:flex;
	text-decoration: none;
	cursor:pointer;
	transform:scale(0.8);
    align-items:center;
    justify-content: center;
    flex-direction:column;
    margin:0 auto;
    padding:0;

	h4 {
		font-size:1rem;
        color:white;
        margin:0;
        line-height:3rem;
	}

	svg {
		color:white;
		font-size:3rem;
        text-align:center;
	}
	&.hover {
    	background: linear-gradient(to right, #08824A, #F1F9F6);

      	svg {
        	color:white;
      	}
	}
`;