import React, { useState, useEffect, useContext } from 'react'

import styled from 'styled-components'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { client } from '../../api'
import { wards } from '../../mock-and-seed-data/wards'

import { KYVLogoSVG } from '../assets/kyv-logo'
import { UserContext } from '../../pages/_app'
import GoogleTranslation from './GoogleTranslate'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const userContext = useContext(UserContext)

  const showWardModal = () => {
    //show modal
  }

  const displayWard = () => {
    if (userContext.userWardSelected) {
      return (
        <WardDisplay>
          <Link href={`/candidates/${userContext.userWardSlug}`}>
            <a>
              <div className="ward-circle">
                <FontAwesomeIcon icon={faHome} />
              </div>
              {userContext.userWardName}
            </a>
          </Link>
        </WardDisplay>
      )
    } else {
      return (
        <WardDisplay>
          <Link href="/#home-browse-wards">
            <a>
              <div className="ward-circle">
                <FontAwesomeIcon icon={faHome} />
              </div>
              Find your ward
            </a>
          </Link>
        </WardDisplay>
      )
    }
  }

  // useEffect(() => {
  //   const localCookie = Cookies.get("kyv-resident-id");
  //   getUserWard(localCookie);
  // }, []);

  return (
    <>
      {showMobileMenu && (
        <MobileMenu>
          <MMTop>
            <CloseBtn
              onClick={() => setShowMobileMenu(false)}
              src={'/images/close.png'}
            />
          </MMTop>
          <MMBtns>
            <Link href="/">
              <NavBtn>Home</NavBtn>
            </Link>
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
            <Link href="/about">
              <NavBtn>About</NavBtn>
            </Link>
          </MMBtns>
          <MMBtm>
            <Link href="/">
              <a>
                <KYVLogoSVG />
              </a>
            </Link>
          </MMBtm>
        </MobileMenu>
      )}

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
          <Link href="/about">
            <NavBtn>About</NavBtn>
          </Link>
        </Center>
        <Right>
          {displayWard()}
          <GoogleTranslation />
        </Right>
        <RightMobile>
          <BurgerMenu
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            src={'/images/hamburger.png'}
          />
        </RightMobile>
      </Main>
    </>
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
  font-size: 16px;
`

const WardDisplay = styled.div`
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #393535;
  }
  .ward-circle {
    width: 35px;
    height: 35px;
    background: #0577c8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  svg {
    width: 17px;
    height: 17px;
    color: #fff;
  }
`

const Left = styled.div`
  border-right: 1px solid grey;
  padding: 20px;
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    width: initial;
    border-right: none;
  }

  svg {
    width: 120px;
  }
`

const Center = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 780px) {
    display: none;
  }
`

const NavBtn = styled.a`
  margin: 0 20px;
  cursor: pointer;
  // font-size: 18px;

  @media (max-width: 1160px) {
    font-size: 16px;
    margin: 0 15px;
  }

  @media (max-width: 960px) {
    font-size: 15px;
    margin: 0 10px;
  }

  @media (max-width: 780px) {
    font-size: 18px;
    margin: 20px 10px;
    font-weight: 500;
    text-decoration: underline;
  }
`

const Right = styled.div`
  height: 80px;
  border-left: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    border-left: 1px solid #393535;
  }

  @media (max-width: 780px) {
    display: none;
  }
`

const RightMobile = styled.div`
  display: none;
  height: 80px;
  align-items: center;
  justify-content: center;
  padding-right: 20px;

  @media (max-width: 780px) {
    display: flex;
  }
`

const BurgerMenu = styled.img`
  width: 20px;
  height: 20px;
`

const Btn = styled.div`
  font-family: 'Poppins';
  color: ${({ current }) => (current ? '#bbb' : 'black')};
  cursor: ${({ current }) => (current ? 'initial' : 'pointer')};
`

const MobileMenu = styled.div`
  width: calc(100% - 2px);
  height: 100vh;
  border: 1px solid grey;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MMTop = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: flex-end;
`

const CloseBtn = styled.img`
  width: 23px;
  height: 23px;
`

const MMBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const MMBtm = styled.div`
  display: flex;
  padding: 20px;
`
