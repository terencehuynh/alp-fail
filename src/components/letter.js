import React from 'react'
import { Container, styled } from 'fannypack'
import { theme } from 'styled-tools'

import { LetterText } from '../utils/letter'
import { LABOR_RED } from '../constants'

import { Disclaimer } from './disclaimer'
import { LetterCta } from './letter-cta'

const Wrapper = styled(Container)`
  padding: 42px 10px 0;
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 30px 10px;
  }
`

const LetterWrapper = styled(Wrapper)`
  p:first-child {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${LABOR_RED};
  }
  p:last-child {
    font-size: 1.5rem;
    text-align: center;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 48px;
    font-weight: normal;
    color: #e53440;
    letter-spacing: -1px;
    position: relative;
  }
  h2:before {
    background: white;
    position: absolute;
    z-index: -5;
    width: 80px;
    content: ' ';
    top: 0;
    bottom: 0;
  }
  h2:after {
    position: absolute;
    background: #e53440;
    height: 3px;
    width: 100%;
    top: 50%;
    left: 0;
    right: 0;
    content: ' ';
    z-index: -10;
  }
  ul {
    list-style: none;
    margin: 0 0 24px;
    padding: 0;
    column-count: 4;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      column-count: 2;
    }
  }
  li {
    text-align: left;
    margin-bottom: 5px;
  }
`

export const Letter = () => (
  <React.Fragment>
    <LetterWrapper breakpoint="desktop">{LetterText}</LetterWrapper>
    <Wrapper breakpoint="desktop">
      <LetterCta />
      <Disclaimer />
    </Wrapper>
  </React.Fragment>
)
