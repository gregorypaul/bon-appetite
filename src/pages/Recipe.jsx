import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import React from 'react';

function Recipe() {

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
                <h2>{details.text}</h2>
                <img src={details.image} alt={details.text} />
                {console.log(details)}

                <Info>
                    <Button className={activeTab ==='instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                    <Button className={activeTab==='ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                    
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
                </Info>
            </DetailWrapper>
        </div>
    )
}

const DetailWrapper = styled.div`
    margin-top:10rem;
    margin-bottom:5rem;
    display:flex;

    h2 {
        margin-bottom:2rem;
    }
    .active {
        background:linear-gradient(35deg, #393939, #313131);
        color:white;
    }
    li {
        font-size:1.2rem;
        line-height:2.5rem;
    }
    ul {
        margin-top:2rem;
    }
    img {
        display:block;
        height:100%;
        max-width:100%;
    }
`;
  
const Button = styled.button`
    padding:1rem 2rem;
    color:#313131;
    background:white;
    border:2px solid black;
    margin-right:2rem;
    font-weight:600;
`;

const Info = styled.div`
    margin-left:10rem;
`;

export default Recipe