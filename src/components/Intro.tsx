import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'

const Intro = () => (
  <Box as="section" mt={8}>
    <Heading textAlign="center">Hi! I&#39;m Felix.</Heading>

    <Flex mt={6}>
      <VStack align="left" spacing={5}>
        <Text>
          I&#39;m a Full-stack Engineer currently living in Germany 🇩🇪. I love
          working with Typescript and React.
        </Text>

        <Text>
          After studying media at the University of Bayreuth, I worked for an
          agency where I had the opportunity to build a variety of websites
          involving e-commerce, content management and responsive design. In
          2021, I started creating my own projects as well as freelancing for
          clients. Among them are various artists and a cryptocurrency exchange.
          See more on my{' '}
          <NextLink href="/projects" passHref>
            <Link>projects page</Link>
          </NextLink>
          .
        </Text>

        <Text>
          Feel free to contact me at{' '}
          <Link href="mailto:felix@fxha.dev">felix@fxha.dev</Link>.
        </Text>
      </VStack>
    </Flex>
  </Box>
)

export default Intro
