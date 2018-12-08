import React from 'react'
import {
  Container,
  Box,
  Heading,
  Button,
  Paragraph,
  Set,
  Icon,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

import { LetterText } from '../utils/letter'

const Tweet =
  'I am angry about your decision to pass #aabill and in all good conscience, I can never support Labor. @BillShortenMP @AustralianLabor https://alp.fail'
  
const Url =
  'https://alp.fail'

const Wrapper = styled(Container)`
  padding: 42px 10px 0;
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 30px 10px;
  }
`

const LetterWrapper = styled(Wrapper)`
  p {
    line-height: 1.5;
    margin: 0 0 24px;
  }
  p:first-child {
    font-size: 1.75rem;
    font-weight: 600;
    color: #e53440;
  }
  a {
    color: rgb(88, 108, 207);
  }
  a:hover {
    color: rgb(136, 150, 221);
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
  ol,
  ul {
    list-style: none;
    margin: 0;
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

const LetterCta = styled(Box)`
  border: 1px solid #e0e0e0;
  padding: 30px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 24px;
`

const Disclaimer = styled(Box)`
  background: #f0f0f0;
  padding: 15px 30px;
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 48px;
`

const LetterCtaHeading = styled(Heading)`
  margin: 0 0 12px;
  text-align: center;
  font-weight: normal;
`

const DisclaimerHeading = styled(Heading)`
  margin: 0 0 4px;
  font-size: 0.875rem;
  text-align: center;
`

const DisclaimerParagraph = styled(Paragraph)`
  margin: 0;
  font-size: 0.875rem;
  text-align: center;
`

const ButtonSet = styled(Set)`
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
  }
`

export const Letter = () => (
  <React.Fragment>
    <LetterWrapper breakpoint="desktop">{LetterText}</LetterWrapper>
    <Wrapper breakpoint="desktop">
      <LetterCta>
        <LetterCtaHeading as="h3">
          Want to add your name to this letter?
        </LetterCtaHeading>
        <ButtonSet>
          <Button
            use="a"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              Tweet
            )}`}
          >
            Send a Tweet
          </Button>
          <Button
            use="a"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              Url
            )}`}
          >
            Post on Facebook
          </Button>
          <Button use="a" href="https://github.com/terencehuynh/alp-fail">
            <Icon icon="git-pull" marginRight="xxsmall" /> Create a PR on GitHub
          </Button>
        </ButtonSet>
        <LetterCtaHeading as="h4">
          Unsure how to create a PR? Sign up for Github, <a href="https://help.github.com/articles/editing-files-in-another-user-s-repository/">then follow these instructions</a>.
        </LetterCtaHeading>
      </LetterCta>
      <Disclaimer>
        <DisclaimerHeading as="h3">Disclaimer</DisclaimerHeading>
        <DisclaimerParagraph>
          Although various projects, companies and organizations may be listed
          next to signees, these signatures do not necessarily reflect the views
          of anyone except the signees.
        </DisclaimerParagraph>
      </Disclaimer>
    </Wrapper>
  </React.Fragment>
)
