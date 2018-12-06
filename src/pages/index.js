import React from 'react'
import { ThemeProvider } from 'fannypack'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Letter } from '../components/letter'

const IndexPage = () => (
  <ThemeProvider>
    <Header />
    <Letter />
    <Footer />
  </ThemeProvider>
)

export default IndexPage
