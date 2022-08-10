import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Link from 'next/link'

const SeeMoreContainer =  ({to}) => {
  return (
        <Main>
          <Link href={to ? to : '/'}>
            <a>See More</a>
          </Link>
        </Main>
  )
}

export default SeeMoreContainer

const Main = styled.div`
  background-color: white;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid grey;
  padding: 16px;
  font-size: 18px;
`
