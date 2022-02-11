import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useLang } from '../utils'

const introContent = {
  en: {
    heading: "Hi! I'm Felix.",
    p1: "I'm a Full-stack Engineer from Germany currently living in Porto. I love working with Typescript and React.",
    p2: "After college, I contributed to a variety of websites involving e-commerce, content management and responsive design. Since 2020, I've been creating my own projects as well as freelancing for clients. Among them are an IoT platform and a cryptocurrency exchange. Have a look at my",
    projects: 'projects page',
    p3: 'Feel free to contact me at',
  },
  de: {
    heading: 'Hi! Ich bin Felix.',
    p1: 'Ich bin ein Full-stack-Entwickler aus Deutschland und lebe in Porto. Ich arbeite bevorzugt mit Typescript und React.',
    p2: 'Nach dem Studium erstellte ich E-Commerce-Webseiten und passte Content-Management-Systeme an Kundenwünsche an. Alles im Responsive Design. Mittlerweile entwerfe ich eigene Projekte und arbeite remote für internationale Kunden. Dazu zählen eine IoT-Plattform und eine Tauschbörse für Kryptowährungen. Mehr dazu auf meiner',
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

        <Flex mt={{ base: '6', sm: '10' }}>
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
