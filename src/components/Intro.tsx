import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useLang } from '../utils'

const introContent = {
  en: {
    heading: "Hi! I'm Felix.",
    p1: "I'm a Full-stack Engineer from Germany currently living in Lisbon, Portugal. I love working with Typescript and React.",
    p2: 'After studying media, I contributed to a variety of websites involving e-commerce, content management and responsive design. In 2021, I started creating my own projects as well as freelancing for clients. Among them are various artists and a cryptocurrency exchange. Have a look at my',
    projects: 'projects page',
    p3: 'Feel free to contact me at',
  },
  de: {
    heading: 'Hi! Ich bin Felix.',
    p1: 'Ich bin ein Full-stack-Entwickler aus Deutschland und lebe in Lissabon. Ich arbeite bevorzugt mit Typescript und React.',
    p2: 'Nach einem Medienstudium arbeitete ich für eine Werbeagentur, wo ich an mehreren Projekten mitwirkte. Wir bauten Webseiten mit E-Commerce-Funktionen und passten Content-Management-Systeme an Kundenwünsche an. Alles im Responsive Design. 2021 fing ich an, eigene Projekte zu entwerfen und selbstständig für Kunden zu arbeiten. Dazu zählen mehrere Künstlerprojekte und eine Tauschbörse für Kryptowährungen. Mehr dazu auf meiner',
    projects: 'Projektseite',
    p3: 'Bei Interesse kannst Du mich erreichen unter',
  },
}

const Intro = () => {
  const lang = useLang()
  const { heading, p1, p2, projects, p3 } = introContent[lang]

  return (
    <Flex justifyContent="center" mb="28">
      <Box as="section" maxW="xl">
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
