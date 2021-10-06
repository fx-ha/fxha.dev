import NextLink from 'next/link'
import { Heading, Flex, Link, Text, VStack } from '@chakra-ui/react'

const Intro = () => (
  <section>
    <Heading textAlign="center" mt={5}>
      Hi! I&#39;m Felix.
    </Heading>

    <Flex mt={6}>
      <VStack align="left" spacing={5}>
        <Text>
          I&#39;m a Full-stack Engineer currently living in Germany 🇩🇪. I love
          working with Typescript and React.
        </Text>

        <Text>
          Before focusing on the web, I studied media and game development at
          the University of Bayreuth. Since then, I worked for an advertising
          agency where I had the opportunity to help build a variety of sites
          involving e-commerce, content management and responsive design.
        </Text>

        <Text>
          In 2021 I started creating my own projects as well as freelancing for
          different clients. Among them are various artists and a cryptocurrency
          exchange. See more on my{' '}
          <NextLink href="/projects">
            <Link>projects page</Link>
          </NextLink>
          .
        </Text>

        <Text>
          Feel free to contact me with interesting proposals or job offers at{' '}
          <Link href="mailto:felix@fxha.dev">felix@fxha.dev</Link>
        </Text>
      </VStack>
    </Flex>
  </section>
)

export default Intro
