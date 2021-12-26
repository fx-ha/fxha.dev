import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  config,
  styles: {
    global: (props: any) => ({
      html: {
        bg: mode('#fbfdfc', 'gray.800')(props),
        bgGradient: mode(
          'linear-gradient(to-b, #fbfdfc, #ebebeb)',
          'linear-gradient(to-b, gray.800, gray.900)'
        )(props),
      },
      body: {
        color: mode('gray.900', 'whiteAlpha.900')(props),
        bg: mode('#fbfdfc', 'gray.800')(props),
        bgGradient: mode(
          'linear-gradient(to-b, #fbfdfc, #ebebeb)',
          'linear-gradient(to-b, gray.800, gray.900)'
        )(props),
      },
    }),
  },
})

export default theme
