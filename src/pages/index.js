import React from 'react'
import Helmet from 'react-helmet'

import { Page } from '../components/page'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Letter } from '../components/letter'

import ogimage from '../components/ogimage.jpg'

const IndexPage = () => (
  <Page>
    <Helmet>
      <title>An Open Letter to Bill Shorten from the Tech Community</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ALP FAIL: An Open Letter to Bill Shorten from the Tech Community"
      />
      <meta
        name="twitter:description"
        content="We are angry about #aabill - a bad law that will destroy the IT industry"
      />
      <meta name="twitter:image" content={'https://alp.fail' + ogimage} />

      <meta
        property="og:title"
        content="ALP FAIL: An Open Letter to Bill Shorten from the Tech Community"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={'https://alp.fail' + ogimage} />
      <meta
        property="og:image:secure_url"
        content={'https://alp.fail' + ogimage}
      />
      <meta
        property="og:description"
        content="We are angry about #aabill - a bad law that will destroy the IT industry"
      />
    </Helmet>
    <Header />
    <Letter />
    <Footer />
  </Page>
)

export default IndexPage
