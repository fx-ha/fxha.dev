import Head from 'next/head'
import { Container, Flex, useColorMode } from '@chakra-ui/react'
import { Navigation } from '.'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Felix Ha" />
        <title>Felix Ha</title>
      </Head>

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        minHeight="100vh"
      >
        <Container as="main" maxW="3xl">
          <Navigation />
          {children}
        </Container>
      </Flex>
    </>
  )
}

export default Layout
