import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useLang } from '../utils'

const introContent = {
  en: {
    heading: "Hi! I'm Felix.",
    p1: "I'm a Full-stack Engineer from Germany currently living in Porto. I love working with Typescript and React.",
    p2: "After studying media, I contributed to a variety of websites involving e-commerce, content management and responsive design. Since 2020, I've been working on my own projects as well as freelancing for clients. Among them are various artists and a cryptocurrency exchange. Have a look at my",
    projects: 'projects page',
    p3: 'Feel free to contact me at',
  },
  de: {
    heading: 'Hi! Ich bin Felix.',
    p1: 'Ich bin ein Full-stack-Entwickler aus Deutschland und lebe in Porto. Ich arbeite bevorzugt mit Typescript und React.',
    p2: 'Nach einem Medienstudium erstellte ich für eine Agentur Webseiten mit E-Commerce-Funktionen und passte Content-Management-Systeme an Kundenwünsche an. Alles im Responsive Design. Seit 2020 entwerfe ich eigene Projekte und arbeite selbstständig für Kunden. Dazu zählen Künstlergruppen und eine Tauschbörse für Kryptowährungen. Mehr dazu auf meiner',
    projects: 'Projektseite',
    p3: 'Bei Interesse kannst Du mich erreichen unter',
  },
}

const Intro = () => {
  const lang = useLang()
  const { heading, p1, p2, projects, p3 } = introContent[lang]

  return (
    <Flex
      as="section"
      id="intro"
      justifyContent="center"
      mb={{ base: '12', sm: '20' }}
    >
      <Box maxW="xl">
        <Heading textAlign="center">{heading}</Heading>

        <Flex mt="14">
          <VStack align="left" spacing={5}>
            <Text textAlign="justify">{p1}</Text>

            <Text textAlign="justify">
              {p2}{' '}
              <NextLink href="/projects" passHref>
                <Link fontWeight="bold">{projects}</Link>
              </NextLink>
              .
            </Text>

            <Text textAlign="justify">
              {p3}{' '}
              <Link fontWeight="bold" href="mailto:felix@fxha.dev">
                felix@fxha.dev
              </Link>
              .
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Intro
