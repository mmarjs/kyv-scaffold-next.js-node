import React, { useState } from 'react'
import styled from 'styled-components'

import SiteDepartureModal from './SiteDepartureModal'

const Footer = () => {
  // Modal stuff
  const [isModalOpen, setModalOpen] = useState(false)
  const [href, setHref] = useState('')

  const handleLinkClick = (e) => {
    e.preventDefault()
    setModalOpen(true)
    setHref(e.target.href)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <Main>
      <Left>
        <L1>A PROJECT BY</L1>
        <Image src="/images/tpl-logo-2.png" alt="Toronto Public Library" />
        <L3>© Copyright 2022 Toronto Public Library</L3>
        <L3>
          <i>
            Funded through the generosity of donors to the Toronto Public
            Library Foundation
          </i>
        </L3>
      </Left>
      <Right>
        <div>
          <L2>JOIN THE CONVERSATION</L2>
          <Links>
            <Link
              onClick={handleLinkClick}
              target="_blank"
              href={'https://www.facebook.com/torontopubliclibrary'}
            >
              Facebook
            </Link>
            <Link
              onClick={handleLinkClick}
              target="_blank"
              href={'https://twitter.com/torontolibrary'}
            >
              Twitter
            </Link>
            <Link
              onClick={handleLinkClick}
              target="_blank"
              href={'https://www.instagram.com/torontolibrary/'}
            >
              Instagram
            </Link>
          </Links>
        </div>
        <div>
          <Links>
            <Link href="/contact-us">Contact Us</Link>
            <Link
              href="https://docs.google.com/document/d/1K00pBHwIxsJ9fYgtmPMcT8sVQJ4dLdJjCiEPTjKbNUE/edit?usp=sharing"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link href="/data-policy">How we use your information</Link>
            <Link href="/cookies">How we use website cookies</Link>
          </Links>
        </div>
      </Right>
      {isModalOpen && (
        <SiteDepartureModal href={href} handleClose={handleModalClose} />
      )}
    </Main>
  )
}

export default Footer

const Image = styled.img`
  width: 100%;
  max-width: 180px;
  height: auto;
`

const Main = styled.div`
  z-index: 2;
  width: 100%;
  background-color: white;
  display: flex;
  margin-top: 100px;
  padding: 60px 10%;
  font-size: 14px;
  border-top: 1px solid #393535;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
`

const L1 = styled.p`
  /* margin-bottom: 20px; */
`

const L2 = styled.p`
  margin-bottom: 6px;
`

const L3 = styled.p`
  margin-bottom: 20px;
`

const Right = styled.div`
  flex: 1;

  @media (max-width: 560px) {
    margin-top: 30px;
  }
`

const Links = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`

const Link = styled.a`
  margin-right: 10px;
`
