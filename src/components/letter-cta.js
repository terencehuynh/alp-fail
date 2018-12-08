import React from 'react'
import {
  Box,
  Heading,
  Button,
  Set,
  Icon,
  Link,
  Paragraph,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

const Tweet =
  'I am angry about your decision to pass #aabill and in all good conscience, I can never support Labor. @BillShortenMP @AustralianLabor https://alp.fail'

const Url = 'https://alp.fail'

const Wrapper = styled(Box)`
  border: 1px solid #e0e0e0;
  padding: 30px;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 24px;

  p {
    margin: 0;
  }
`

const LetterCtaHeading = styled(Heading)`
  margin: 0 0 12px;
  text-align: center;
`

const ButtonSet = styled(Set)`
  margin-bottom: 24px;
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
  }
`

export const LetterCta = () => (
  <Wrapper>
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
    <Paragraph>
      Unsure how to create a PR? Sign up for Github,{' '}
      <Link href="https://help.github.com/articles/editing-files-in-another-user-s-repository/">
        then follow these instructions
      </Link>
      .
    </Paragraph>
  </Wrapper>
)
