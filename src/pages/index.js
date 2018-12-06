import React from 'react'
import { ThemeProvider } from 'fannypack'
import Helmet from 'react-helmet'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Letter } from '../components/letter'

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>
        alp.fail - An Open Letter to Bill Shorten from the Tech Community
      </title>
    </Helmet>
    <ThemeProvider>
      <Header />
      <Letter />
      <Footer />
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
