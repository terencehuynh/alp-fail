import React from 'react'
import { ThemeProvider, Container } from 'fannypack'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <React.Fragment>
    <Helmet>
      <title>404</title>
    </Helmet>

    <ThemeProvider>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </ThemeProvider>
  </React.Fragment>
)

export default NotFoundPage
