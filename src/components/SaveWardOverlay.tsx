import React, { useState } from 'react'
import styled from 'styled-components'
import Cookies from "js-cookie";

import { client }  from '../../api'

const SaveWardOverlay = ({closeModal, ward}) => {
  const [email, setEmail] = useState<string>('')

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const saveWithEmail = async () => {
    console.log(email)
    console.log(ward)
    if (email.length > 0) {
      // TODO: Check if email is valid
      const response = await client.post('/residents/ward-resident', { email, ward })
      console.log(response.data)
      Cookies.set('kyv-resident-id', response.data)
      closeModal(false)
    } else {
      alert('Please enter a valid email address.')
    }
  }

  const saveWithoutEmail = async () => {
    console.log(ward)
    const response = await client.post('/residents/new-resident', { ward })
    console.log(response.data)
    Cookies.set('kyv-resident-id', response.data)
    closeModal(false)
  }

  return (
      <OverlayBG>
        <Inner>
          <Top>
            <H1>Save My Ward</H1>
            <Close src={'/images/times.png'} onClick={() => closeModal(false)} />
          </Top>
          <Btm>
            <H2>We'll save Spadina-Fort York as your ward. Would you like to be notified with pertinent updates about candidates from your ward and upcoming election?</H2>

            <Input placeholder="email@email.com" name="email" value={email} onChange={onChange} type="text" /> 

            <Btn onClick={saveWithEmail}>Save with email</Btn>
            <Btn2 onClick={saveWithoutEmail}>Save without email</Btn2>
          </Btm>
        </Inner>
      </OverlayBG>
  )
}

export default SaveWardOverlay

const OverlayBG = styled.div`
  background-color: #333333bb;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Inner =styled.div`
  background-color: white;
  width: 50%;
  max-width: 500px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border: 1px solid #393535;
`

const Top = styled.div`
  background-color: #B456D6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 8px;
  padding: 20px;
`

const H1 = styled.h1`
  color: white;
`

const Close = styled.img`
  width: 20px;
  height: 20px;
`

const Btm = styled.div`
  padding: 20px;
`

const H2 = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 30px;
`

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  border-radius: 7px;
  border: 1px solid #;
  border: 1px solid #393535;
`

const Btn = styled.button`
  width: 100%;
  display: block;
  margin-top: 10px;
  border-radius: 7px;
  padding: 7px 0;
  border: 1px solid #393535;
  background-color: #953DB4;
  color: white;
`

const Btn2 = styled(Btn)`
  background-color: #1F2E53;
` 