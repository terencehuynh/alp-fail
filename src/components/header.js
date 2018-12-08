import React from 'react'
import { Flex, Heading, Paragraph, styled } from 'fannypack'
import { theme } from 'styled-tools'

import { LABOR_RED } from '../constants'

const Wrapper = styled(Flex)`
  background-color: ${LABOR_RED};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 40vh;
  padding: 42px 10px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    min-height: auto;
  }
`

const Headline = styled(Heading)`
  color: white;
  font-size: 4rem !important;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 2.5rem !important;
  }
`

const Dear = styled(Paragraph)`
  font-size: 1.125rem;
  text-transform: uppercase;
  color: white;
  text-align: center;
`

export const Header = () => (
  <Wrapper>
    <Headline>You bunch of idiots!</Headline>
    <Dear>
      An Open Letter to Bill Shorten and Labor from the Tech Community
    </Dear>
  </Wrapper>
)
