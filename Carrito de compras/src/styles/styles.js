import styled from 'styled-components';

export const AppContainer = styled.div`
    font-family: 'Poppins', sans-serif;
`;


export const CabeceraContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0 10%;
    margin: 20px;
        @media (max-width: 842px) {
            text-align: center;
        }
    
    span {
        background-color: PaleGreen;
        padding: 3px;
        color: black;
        border-radius: 3px;
    }

    h1 {
        font-size: 16px;
        text-align: right;
        margin: 0;
    }
    p {
        font-size: 14px;
        text-align: right;;
        margin: 0;
    }
`;

export const ListadoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10%;
    @media (max-width: 1500px) {
        flex-wrap: wrap;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border: 0.5px solid silver;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 10px;
    width: 30%;
    @media (max-width: 1500px) {
        width: 40%;

    }
    @media (max-width: 842px) {
        width: 90%;
    }
    h3 {
        text-align: left;
        font-size: 14px;
        margin: 5px;
    }
    img  {
        
        display:block;
        padding: 0 10%;
        margin: 0;
    }
    p {
        font-size: 12px;
        text-align: justify;
        margin: 0;
    }
    
    h5 {
        font-size: 13px;
        font-weight: normal;
        text-align: left;
        margin: 10px;
        span {
            background-color: Gainsboro;
            padding: 3px;
            font-weight: normal;
            color: black;
            border-radius: 3px;
        }
    }
`;

export const ProductButton = styled.button`
    background-color: PaleGreen;
    border: none;
    border-radius: 20px;
    text-transform: uppercase;
    padding: 10px;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    cursor: pointer;
    &:disabled {
        background-color: white;
        cursor: not-allowed;
    }
`;




