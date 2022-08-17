import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Main>
      <Left>
        <L1>A PROJECT BY</L1>
        <Image src="/images/tpl-logo.png" />
        <L3>© Copyright 2022 Toronto Public Library</L3>
      </Left>
      <Right>
        <L2>JOIN THE CONVERSATION</L2>
        <Links>
          <Link
            target="_blank"
            href="https://www.facebook.com/torontopubliclibrary"
          >
            Facebook
          </Link>
          <Link target="_blank" href="https://twitter.com/torontolibrary">
            Twitter
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/torontolibrary/"
          >
            Instagram
          </Link>
        </Links>
        <Link>What do you think about Know Your Vote T.O.?</Link>
      </Right>
    </Main>
  )
}

export default Footer

const Image = styled.img`
  max-width: 150px;
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
  margin-bottom: 20px;
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
`

const Link = styled.a`
  margin-right: 10px;
`
