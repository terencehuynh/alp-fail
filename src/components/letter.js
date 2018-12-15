import React from 'react'
import PropTypes from 'prop-types'
import { Container, styled } from 'fannypack'
import { theme } from 'styled-tools'

import { LetterText } from '../utils/letter'
import { LABOR_RED } from '../constants'

import { Disclaimer } from './disclaimer'
import { LetterCta } from './letter-cta'

const Wrapper = styled(Container)`
  padding: 30px 20px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 20px 0;
  }
`

const LetterWrapper = styled(Wrapper)`
  padding-bottom: 0;
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
    font-weight: bold;
    color: #e53440;
    letter-spacing: -1px;
    position: relative;
    text-align: center;
  }
  h2:before {
    background: white;
    position: absolute;
    z-index: -5;
    width: 120px;
    content: ' ';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
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
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 0.8125rem;
    }
  }
`

export const Letter = ({ url }) => (
  <React.Fragment>
    <LetterWrapper breakpoint="desktop">{LetterText}</LetterWrapper>
    <Wrapper breakpoint="desktop">
      <LetterCta url={url} />
    </Wrapper>
    <Disclaimer />
  </React.Fragment>
)

Letter.propTypes = {
  url: PropTypes.string.isRequired,
}
