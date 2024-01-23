import styled from "styled-components";

import Link from "next/link";

type Props = {
  title?: string;
  children: JSX.Element;
  width?: string;
  actionTitle?: string;
  actionLink?: string;
  id?: string;
};

const componentWidth = (width) => {

  if (width === "one") {
    return "33.3333%";
  } else if (width === "two") {
    return "66.6666%";
  } else {
    return "100%";
  }
};

const ThemeContainer = ({
  children,
  title,
  width,
  actionTitle,
  actionLink,
  id
}: Props) => {
  const renderTitle = () => {
    if (title && !actionTitle) {
      return (
        <div className="title-container">
          <h2>{title}</h2>
        </div>
      );
    } else if (title && actionTitle) {
      return (
        <div className="title-container">
          <h2>{title}</h2>
          <Link href={actionLink}>{actionTitle}</Link>
        </div>
      );
    }
  };

  return (
    <Main id={id ? id : ''}>
      {renderTitle()}
      <article>{children}</article>
    </Main>
  );
};

export default ThemeContainer;

const Main = styled.div`
  background-color: white;
  border: 2px solid #393535;
  border-radius: 0px 20px 20px 20px;
  max-width: 1344px;
  box-shadow: 8px 8px #393535;
  margin-bottom: 40px;
  overflow: hidden;
  width: ${props => props.width ? componentWidth(props.width) : '100%'};

  @media (max-width: 1040px) {
    border-radius: 0px 10px 10px 10px;
    margin-bottom: 20px;
    box-shadow: 5px 5px #393535;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  .title-container {
    background: #00B5E2;
    color: #393535;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 85px;
    border-bottom: 2px solid #393535;

    @media (max-width: 1040px) {
      padding: 10px 18px;
      height: auto;
      min-height: 55px;
    }
  }

  .title-container > h2 {
    font-size: 30px;
    font-weight: bold;
    padding: 10px 0;

    @media (max-width: 1040px) {
      font-size: 20px;
    }
  }

  .title-container > a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    background: #a849ca;
    border-radius: 10px;
    border: 2px solid #393535;

    @media (max-width: 1040px) {
      padding: 10px;
      font-size: 14px;
    }
  }
`;
