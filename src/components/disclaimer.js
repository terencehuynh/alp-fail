import React from 'react'
import { Box, Heading, Paragraph, styled } from 'fannypack'

const Wrapper = styled(Box)`
  background: #f3f3f3;
  padding: 25px 30px;
  text-align: center;
  font-size: 0.875rem;
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

export const Disclaimer = () => (
  <Wrapper>
    <DisclaimerHeading as="h3">Disclaimer</DisclaimerHeading>
    <DisclaimerParagraph>
      Although various projects, companies and organizations may be listed next
      to signees, these signatures do not necessarily reflect the views of
      anyone except the signees.
    </DisclaimerParagraph>
  </Wrapper>
)
