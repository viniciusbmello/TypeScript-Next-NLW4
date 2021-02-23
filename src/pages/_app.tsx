import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import ExperienceBar from '../components/experienceBar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ExperienceBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
