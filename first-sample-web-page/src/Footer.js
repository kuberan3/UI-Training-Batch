import  styled  from "styled-components";
const Footer = () => {
const FooterDiv = styled.div`
background-color: black;
width: 100vw;
position: fixed;
height: 50px;
color: white;
justify-content: center;
display: flex;
bottom: 0;
  left: 0;
  right: 0;
`
    return (
        <FooterDiv>
            <h4>@CopyRights2001</h4>
        </FooterDiv>
    );
  };
  export default Footer;