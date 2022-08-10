import styled from "styled-components";

const LeftHeaderContainer = ({ children, title }) => {
  const renderTitle = () => {
    if (title) {
      return (
        <div className="left-header">
          <h2>{title}</h2>
        </div>
      )
    }
  }

  return (
    <Main>
      {renderTitle()}
      <article>{children}</article>
    </Main>
  );
};

export default LeftHeaderContainer;

const Main = styled.div`
  background-color: white;
  border: 2px solid #393535;
  border-radius: 0px 20px 20px 20px;
  max-width: 1344px;
  box-shadow: 8px 8px #393535;
  margin-bottom: 40px;
  overflow: hidden;
  display: flex;
  padding: 40px 60px;
  align-items: top;

  @media (max-width: 1040px) {
    flex-direction: column;
    border-radius: 0px 10px 10px 10px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 5px 5px #393535;
  }

  .left-header {
    width: 40%;
    text-align: right;
    font-weight: 800;
    font-size: 40px;

    @media (max-width: 1040px) {
      font-size: 28px;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 40px;
    line-height: 120%;
    font-weight: 300;
    font-size: 20px;

    @media (max-width: 1040px) {
      padding-left: 0;
      font-size: 18px;
    }
  }
`;