import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'
import { Navigation } from '.'

const Layout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title: string
  description?: string
}) => (
  <>
    <Head>
      <link rel="icon" href="/images/icon/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta
        name="description"
        content={
          description ??
          'Personal website of Felix Ha. Find out about recent projects and how to get in touch.'
        }
      />
      <title>{title}</title>
    </Head>

    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="100vh"
    >
      <Container maxW="3xl">
        <Navigation />
        <main>{children}</main>
      </Container>
    </Flex>
  </>
)

export default Layout
