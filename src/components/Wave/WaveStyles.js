import styled from 'styled-components';


export const PageWave = styled.div`
    position:relative;
    .custom-shape-divider-bottom-1685049418 {
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1685049418 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
}

.custom-shape-divider-bottom-1685049418 .shape-fill {
    fill: #FFFFFF;
}
`;

export const CTA = styled.div`
    background: #fff;
    background-size: cover;
    background-position:50% 50%;
    width:100%;
    height:100%;
    min-height:400px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    .underlay {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgb(255, 255, 255);
        z-index:1;
    }
    
`;
export const Info = styled.div`
    display:block;
    margin:auto;
    position:relative;
    z-index:2;
    text-align:center;
h2 {
        color:#fff;
        font-size:3rem;
        @media(max-width:992px) {
            font-size:1.8rem;
        }
    }
    p {
        color:#fff;
        position:relative;
    }
`;