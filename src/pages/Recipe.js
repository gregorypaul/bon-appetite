import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import React from 'react';

const Recipe = () => {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    
    return (
        <div>
            <DetailWrapper>
                <Info>
                    <div>
                        <h2>{details.title}</h2>
                        <img src={details.image} alt={details.text} />
                    
                        <Button className={activeTab ==='instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                        <Button className={activeTab==='ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                    </div>
                    <div>
                    {activeTab === 'instructions' && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </div>
                    )}
                    {activeTab === 'ingredients' && (
                    <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
                    )}
                    </div>
                </Info>
            </DetailWrapper>
        </div>
    )
}

const DetailWrapper = styled.div`
    display:flex;
    @media(max-width:992px) {
        flex-direction:column;
    }
    padding:30px;
    max-width:1200px;
    margin:0 auto;
    justify-content: center;
    .details {
        display: flex;
        flex-direction:column;
    }
    h2{
        font-size:2.5rem;
        margin:0;
        padding:0;
        font-family: 'Poppins', sans-serif;
        letter-spacing: -1px;
        margin-top:1.5rem;
        color: var(--green);
    }
    h3 {
        margin-top:2rem;
        margin-bottom:2rem;
        font-size:1.5rem;

    }
    .active {
        background:linear-gradient(35deg, #393939, #313131);
        color:white;
    }
    li {
        font-size:1.5rem;
        margin:0;
        padding:0;
        font-family: 'Poppins', sans-serif;
        letter-spacing: -1px;
        font-weight: 600;
    }
    ul {
        margin-top:2rem;
    }
    img {
        width:400px;
        height:250px;
        object-fit:contain;
        display:block;
        margin-bottom:2rem;
    }
`;
  
const Button = styled.button`
    padding:1rem 2rem;
    color:#313131;
    background:white;
    border:2px solid black;
    margin-right:2rem;
    font-weight:600;
    margin-bottom:2rem;
`;

const Info = styled.div`
    display:flex;
    gap:2rem;
    padding:30px;
`;

export default Recipe