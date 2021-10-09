import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import { TechButton } from '.'

const Tech = () => (
  <Box as="section" mt={16}>
    <Heading as="h2" size="lg">
      Tech
    </Heading>

    <Text mt={4} textAlign="center">
      Current tech I&#39;m interested in and that I use regularly:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
      <TechButton href="https://www.typescriptlang.org/">Typescript</TechButton>
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

    <Text mt={6} textAlign="center">
      In the past, I enjoyed working with:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
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

    <Text mt={6} textAlign="center">
      I&#39;m especially interested in learning:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
      <TechButton href="https://reactnative.dev/">React Native</TechButton>
      <TechButton href="https://docs.lightning.engineering/">LND</TechButton>
      <TechButton href="https://threejs.org/">Three.js</TechButton>
      <TechButton href="https://www.rust-lang.org/">Rust</TechButton>
      <TechButton href="https://golang.org/">Golang</TechButton>
      <TechButton href="https://elixir-lang.org/">Elixir</TechButton>
    </Flex>
  </Box>
)

export default Tech
