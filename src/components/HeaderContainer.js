import styled from "styled-components";

const HeaderContainer = ({ children }) => {
  return <Main>{children}</Main>;
};

export default HeaderContainer;

const Main = styled.div`
  display: inline-block;
  background-color: white;
  border: 2px solid #393535;
  border-radius: 0px 20px 20px 20px;
  max-width: 1344px;
  box-shadow: 8px 8px #393535;
  margin-top: 85px;
  overflow: hidden;
  padding: 50px 35px;
  margin-bottom: 30px;
  font-size: 60px;
  font-weight: 800;
  text-transform: capitalize;

  @media (max-width: 1040px) {
    border-radius: 0px 10px 10px 10px;
    margin-top: 50px;
    box-shadow: 5px 5px #393535;
  }
`;
