import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'

import { KYVLogoSVG } from '../assets/kyv-logo'

const Header = () => {
  return (
    <Main>
      <Left>
        <Link href="/">
          <a>
            <KYVLogoSVG />
          </a>
        </Link>
      </Left>
      <Center>
        <Link href="/issues">
          <NavBtn>Big Issues</NavBtn>
        </Link>
        <Link href="/candidates/toronto-mayor">
          <NavBtn>Candidates</NavBtn>
        </Link>
        <Link href="/how-to-vote">
          <NavBtn>How To Vote</NavBtn>
        </Link>
        <Link href="/events">
          <NavBtn>Events</NavBtn>
        </Link>
        {/* <Link href="/about-kyv">
          <NavBtn>About KYV</NavBtn>
        </Link> */}
      </Center>
      <Right>
        <Btn>English</Btn>
      </Right>
    </Main>
  )
}

export default Header

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  background-color: white;
  font-size: 18px;
`

const HomeLink = styled(Link)``

const Left = styled.div`
  width: 180px;
  border-right: 1px solid grey;
  padding-left: 20px;
  height: 80px;
  display: flex;
  align-items: center;
`

const Center = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`

const NavBtn = styled.a`
  margin: 0 20px;
  cursor: pointer;
`

const Right = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  width: 180px;
  height: 80px;
  border-left: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Btn = styled.p`
  padding: 0 10px;
  font-family: 'Poppins';
  color: ${({ current }) => (current ? '#bbb' : 'black')};
  cursor: ${({ current }) => (current ? 'initial' : 'pointer')};
`
