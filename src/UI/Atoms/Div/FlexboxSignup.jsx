import styled from 'styled-components';

const FlexboxSignup = styled.div`
    background-color: #fafafa;
    border: none;
    padding: 10px 10px;
    margin-bottom: 10px;
    width: 100%;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media only screen and (min-width: 450px) {
        border: 1px solid #dbdbdb;        
        background-color: #ffffff;        
    } 
       
    @media only screen and (min-width: 300px) {
        
        padding: 10px 40px;
    }
`;

export default FlexboxSignup;
