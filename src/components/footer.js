import React from 'react'
import { Box, Icon, Paragraph, Link, styled } from 'fannypack'

const Wrapper = styled(Box)`
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  padding: 48px 10px;
`

const FooterParagraph = styled(Paragraph)`
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #969696;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export const Footer = () => (
  <Wrapper>
    <FooterParagraph>
      Made by <Link href="https://twitter.com/terencehuynh">Terence Huynh</Link>
    </FooterParagraph>
    <FooterParagraph>
      Made with{' '}
      <Icon a11yLabel="love" icon="heart" size="small" color="danger" /> in
      Melbourne, Australia.
    </FooterParagraph>
  </Wrapper>
)
