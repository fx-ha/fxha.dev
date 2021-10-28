import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import { TechButton } from '.'
import { useLang } from '../utils'

const techContent = {
  en: {
    heading: 'Tech',
    p1: "Current tech I'm interested in and that I use regularly:",
    p2: 'In the past, I enjoyed working with:',
    p3: "I'm especially interested in learning:",
  },
  de: {
    heading: 'Tech',
    p1: 'Aktuelle Technologien, die mich interessieren und die ich regelmäßig nutze:',
    p2: 'Davor arbeitete ich gerne mit:',
    p3: 'In Zukunft würde ich gerne lernen:',
  },
}

const Tech = () => {
  const lang = useLang()
  const { heading, p1, p2, p3 } = techContent[lang]

  return (
    <Box as="section" mb="24">
      <Heading as="h2" size="lg">
        {heading}
      </Heading>

      <Text mt="9" textAlign="center">
        {p1}
      </Text>

      <Flex mt="5" wrap="wrap" justifyContent="center">
        <TechButton href="https://www.typescriptlang.org/">
          Typescript
        </TechButton>
        <TechButton href="https://nodejs.org/">NodeJS</TechButton>
        <TechButton href="https://www.postgresql.org/">PostgreSQL</TechButton>
        <TechButton href="https://graphql.org/">GraphQL</TechButton>
        <TechButton href="https://reactjs.org/">ReactJS</TechButton>
        <TechButton href="https://nextjs.org/">NextJS</TechButton>
        <TechButton href="https://jestjs.io/">Jest</TechButton>
        <TechButton href="https://chakra-ui.com/">Chakra UI</TechButton>
        <TechButton href="https://www.linux.org/">Linux</TechButton>
        <TechButton href="https://www.docker.com/">Docker</TechButton>
        <TechButton href="https://www.nginx.com/">Nginx</TechButton>
        <TechButton href="https://bitcoin.org/">Bitcoin</TechButton>
      </Flex>

      <Text mt="10" textAlign="center">
        {p2}
      </Text>

      <Flex mt="5" wrap="wrap" justifyContent="center">
        <TechButton href="/">Unity 3D</TechButton>
        <TechButton href="https://www.djangoproject.com/">Django</TechButton>
        <TechButton href="https://fastapi.tiangolo.com/">FastAPI</TechButton>
        <TechButton href="https://laravel.com/">Laravel</TechButton>
        <TechButton href="https://vuejs.org/">VueJS</TechButton>
        <TechButton href="https://getbootstrap.com/">Bootstrap</TechButton>
        <TechButton href="https://www.cypress.io/">Cypress</TechButton>
        <TechButton href="https://www.chromatic.com/">Chromatic</TechButton>
        <TechButton href="https://pptr.dev/">Puppeteer</TechButton>
      </Flex>

      <Text mt="10" textAlign="center">
        {p3}
      </Text>

      <Flex mt="5" wrap="wrap" justifyContent="center">
        <TechButton href="https://reactnative.dev/">React Native</TechButton>
        <TechButton href="https://docs.lightning.engineering/">LND</TechButton>
        <TechButton href="https://threejs.org/">Three.js</TechButton>
        <TechButton href="https://www.rust-lang.org/">Rust</TechButton>
        <TechButton href="https://golang.org/">Golang</TechButton>
        <TechButton href="https://elixir-lang.org/">Elixir</TechButton>
      </Flex>
    </Box>
  )
}

export default Tech
