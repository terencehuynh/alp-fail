import React from 'react'
import { ThemeProvider, css } from 'fannypack'

const theme = {
  global: {},
  Link: {
    base: css`
      color: rgb(88, 108, 207);
      &:hover {
        color: rgb(136, 150, 221);
      }
    `,
  },
  Paragraph: {
    base: css`
      line-height: 1.5;
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    `,
  },
}

// eslint-disable-next-line react/prop-types
export const Page = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
