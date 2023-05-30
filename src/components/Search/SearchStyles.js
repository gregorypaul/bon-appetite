import styled from 'styled-components';

export const FormStyle = styled.form`
    width:680px;
    @media(max-width:768px) {
        width:auto;
    }
`;
export const SearchContainer = styled.div`
    /* background-color:red; */
    width: auto;
    @media(max-width:768px) {
        width:682px;
    }
    border-radius:100px;
    margin:5px 0;
    padding:5px;
    height:41px;
    align-items: center;
    display:flex;
    color:#000;
    transition: all .2s ease-in-out;
    &:focus-within .inputSearchContainer {
        border:none;
    }
    &:focus-within .searchContainer-box {
        border-color:#ccc; 
    }
    &:focus-within .searchHoverIcon {
        visibility:visible;
    }
    &:focus-within .searchIconFixed {
        border-left:1px solid #ccc;
        border-right: none;
        border-top:none;
        border-bottom:none; 
        border-radius:0 80px 80px 0;
        height:39px;
        width:81px;
        padding:3px;
    }
    .searchContainer-box {
        display:flex;
        align-items:center;
        width:100%;
        height:inherit;
        border:1px solid transparent;
        border-radius: 40px;
        height:41px;
    }
    .inputSearchContainer {
        width:100%;
        @media(max-width:768px){
            width:auto;
        }
        border-left:1px solid #ccc;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        height:100%;
        display:flex;
        justify-content: center;
        align-items:center;
        padding-left:5px;
        border-radius: 40px 0 0 40px;
        height:41px;
    }
    .searchHoverIcon {
        padding:20px 5px 20px 20px;
        font-size:16px;
        visibility: hidden;
    }
    .searchIconFixed {
        display:flex;
        justify-content: center;
        align-items:center;
        width:80px;
        background:rgba(248, 248, 248,1);
        height:41px;
        border-radius:0 81px 81px 0;
        border:solid 1px #ccc;
    }
    input {
        width:100%;
        font-size:18px;
        border:none;
        outline:none;
        padding-left:10px;
        &::placeholder {
            font-size:16px;
        }
    }
`; 