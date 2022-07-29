import styled,{createGlobalStyle} from 'styled-components';
const GlobalStyle=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap');
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Montserrat', sans-serif;
}
`
export const Container=styled.div`
width:100%;
max-width:1300px;
margin:0 auto;
padding:0 50px;
@media screen and (max)
`;