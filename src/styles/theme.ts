import { extendTheme, theme as base } from '@chakra-ui/react'

export const myNewTheme = extendTheme({
  fonts: {
    body: `Quicksand, ${base.fonts?.body}`
  },
  colors: {
    brand: {
      primary: '#6886aa',
      primaryDark: '#4c719e',
      secondary: '#fedfe4',
      tertiary: '#9b7278'
    }
  }
})
