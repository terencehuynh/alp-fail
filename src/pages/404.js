import React from 'react'
import { Container } from 'fannypack'
import Helmet from 'react-helmet'

import { Page } from '../components/page'

const NotFoundPage = () => (
  <Page>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Page>
)

export default NotFoundPage
