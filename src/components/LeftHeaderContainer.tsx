import styled from "styled-components";

type Props = {
  children: JSX.Element,
  title?: string
};

const LeftHeaderContainer = ({ children, title }: Props) => {
  const renderTitle = () => {
    if (title) {
      return (
        <div className="left-header" style={title.length > 50 ? {fontSize: "30px"} : {fontSize: "36px"}}>
          <h2 dangerouslySetInnerHTML={{__html: title}} />
        </div>
      )
    } else {
      return null;
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
  display: flex;
  padding: 40px 60px;
  align-items: top;
  width: 100%;
  position: relative;

  @media (max-width: 1040px) {
    flex-direction: column;
    border-radius: 0px 10px 10px 10px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 5px 5px #393535;
  }

  .left-header {
    flex: 1;
    text-align: right;
    font-weight: 800;
    font-size: 36px;
    margin-right: 40px;

    @media (max-width: 1040px) {
      font-size: 28px;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 300;
    font-size: 20px;
    flex: 3;

    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;

      @media (max-width: 1040px) {
        font-size: 20px;
      }
    }

    @media (max-width: 1040px) {
      font-size: 18px;
    }
  }
`;