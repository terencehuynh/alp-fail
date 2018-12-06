import React from 'react'
import { Box, Icon, styled } from 'fannypack'

const Wrapper = styled(Box)`
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  padding: 48px 10px;
  p {
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #969696;
    margin: 0 0 4px;
  }
  a {
    color: rgb(88, 108, 207);
  }
  a:hover {
    color: rgb(136, 150, 221);
  }
`

export const Footer = () => (
  <Wrapper>
    <p>
      Made by <a href="https://twitter.com/terencehuynh">Terence Huynh</a>
    </p>
    <p>
      Made with{' '}
      <Icon a11yLabel="love" icon="heart" size="small" color="danger" /> in
      Melbourne, Australia.
    </p>
  </Wrapper>
)
