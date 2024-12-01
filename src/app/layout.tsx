'use client'

import { GlobalStyle } from '@/styles/GlobalStyle'
import StyledComponentsRegistry from '../lib/registry'
import { Header } from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { primary } from '@/styles/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br' >
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={primary}>
            <GlobalStyle />
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}