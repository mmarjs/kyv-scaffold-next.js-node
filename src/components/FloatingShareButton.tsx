import React, { useState } from "react";
import styled from 'styled-components';

import { ShareSVG } from "../assets/share";

const FloatingShareButton = ({pageName}) => {
  const [showModal, setShowModal] = useState(false)

  const getTwitterLink = (pName) => {
    switch(pName) {
      case "this Ward":
        return "https://twitter.com/intent/tweet?text=The%202022%20municipal%20election%20is%20around%20the%20corner,%20learn%20about%20the%20candidates%20in%20your%20ward.%20Go%20to%20knowyourvote.to%0A%23knowyourvoteTO%20%23torontovotes%20%23vote%20%23toronto%20%23torontocity%20%23torontoelection";

      case "this Issue":
        return "https://twitter.com/intent/tweet?text=Learn%20about%20some%20of%20Toronto's%20biggest%20issues%20related%20to%20the%202022%20municipal%20election.%20Go%20to%20knowyourvote.to%0A%23knowyourvoteTO%20%23torontovotes%20%23vote%20%23toronto%20%23torontocity%20%23torontoelection";

      case "this site":
        return "https://twitter.com/intent/tweet?text=The%202022%20municipal%20election%20is%20around%20the%20corner,%20learn%20about%20the%20candidates%20and%20the%20issues.%20Go%20to%20knowyourvote.to%0A%23knowyourvoteTO%20%23torontovotes%20%23vote%20%23toronto%20%23torontocity%20%23torontoelection";

      default: 
        return "https://twitter.com/intent/tweet?text=Learn%20about%20some%20of%20Toronto's%20biggest%20issues%20related%20to%20the%202022%20municipal%20election.%20Go%20to%20knowyourvote.to%0A%23knowyourvoteTO%20%23torontovotes%20%23vote%20%23toronto%20%23torontocity%20%23torontoelection%22";
    }
  }
    
    return (
      <>
        {
          showModal ? 
          <Modal>
            <MTop>
              <Row>
              <p>Share {pageName}</p>
              <Close onClick={() => setShowModal(false)}>x</Close>
              </Row>
            </MTop>
            <MBottom>
              <SButton href={getTwitterLink(pageName)} target="_blank">
                <p>Twitter</p>
              </SButton>
              <SButton href="https://www.facebook.com/sharer/sharer.php?u=knowyourvote.to" target="_blank">
                <p>facebook</p>
              </SButton>
              <SButton href="https://www.linkedin.com/shareArticle?mini=true&url=https://knowyourvote.to&title=Learn%20more%20about%20the%20upcoming%20election" target="_blank">
                <p>LinkedIn</p>
              </SButton>
            </MBottom>
          </Modal> :
          null
        }
        <Button onClick={() => setShowModal(!showModal)}>
          <p>Share</p>
          <ShareSVG />
        </Button>
      </>
    )
}

export default FloatingShareButton;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 8;
  background-color: #B456D6;
  border: 2px solid #393535;
  border-radius: 0px 10px 10px 10px;
  box-shadow: 8px 8px #393535;
  display: flex;
  padding: 10px 15px;
  cursor: pointer;

  p {
    font-weight: 500;
    color: white;
    font-size: 22px;
    margin-right: 10px;
  }
`

const Modal = styled.div`
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 8;
  background-color: #B456D6;
  border: 2px solid #393535;
  border-radius: 0px 10px 10px 10px;
  box-shadow: 8px 8px #393535;

  display: flex;
  flex-direction: column;
`

const MTop = styled.div`
  padding: 10px 15px;
  border-bottom: 2px solid #393535;

  p {
    color: white;
    font-weight: 500;
    font-size: 22px;
  }
`

const Row = styled.div`
  display: flex;
  /* align-items: space-between; */
  justify-content: space-between;
`

const Close = styled.p`
  cursor: pointer;
`

const MBottom = styled.div`
  display: flex;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 10px;
`

const SButton = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: black;
  border: 1px solid grey;
  padding: 10px;
  margin: 20px 10px;
  border-radius: 0px 10px 10px 10px;
  box-shadow: 5px 5px #393535;
`