import React from 'react'
import { ThemeProvider } from 'fannypack'
import Helmet from 'react-helmet'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Letter } from '../components/letter'

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>An Open Letter to Bill Shorten from the Tech Community</title>
      <meta
        property="og:title"
        content="ALP FAIL: An Open Letter to Bill Shorten from the Tech Community"
      />
      <meta
        property="og:description"
        content="We are angry about #aabill - a bad law that will destroy the IT industry"
      />
    </Helmet>
    <ThemeProvider>
      <Header />
      <Letter />
      <Footer />
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
