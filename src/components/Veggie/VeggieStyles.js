import styled from 'styled-components';

export const Section = styled.div`
    background: var(--white);
    padding:0 15px;
`;

export const Wrapper = styled.div `
	max-width:1200px;
	margin:0 auto;
    padding:2rem 0 1rem 0;
    transform: translateY(-90px);
    @media(max-width:992px) {
        transform: translateY(0);
    }

    h3 {
		margin:0;
		font-size:2.5rem;
		letter-spacing:-1px;
        margin-top:1rem;
		margin-bottom:1rem;
	}
`
export const Card = styled.div`
	min-height:8rem;
    border-radius:.50rem;
    position:relative;
    overflow:hidden;
    margin-bottom:3rem;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
	img {
		border-radius:1rem;
		max-width:100%;
		position:absolute;
		left:0;
		width:100%;
		height:100%;
		object-fit:cover;
	}
	p {
		position:absolute;
		z-index:10;
		left:50%;
		bottom:0%;
		transform: translate(-50%, 0%);
		color:#ffffff;
		width:100%;
		text-align:center;
		font-weight:600;
		font-size:1rem;
		height:60%;
		display:flex;
		justify-content:center;
		align-items:center;
    }
`

export const Gradient = styled.div`
	z-index:3;
	position:absolute;
	width:100%;
	height:100%;
	background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9));
`;