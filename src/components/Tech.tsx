import { Heading, Flex, Text } from '@chakra-ui/react'
import { TechButton } from '.'

const Tech = () => (
  <section>
    <Heading as="h2" size="lg" mt={12}>
      Tech
    </Heading>

    <Text mt={4} textAlign="center">
      Current tech that I&#39;m interested in and that I use on a regular basis:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
      <TechButton text="Typescript" href="https://www.typescriptlang.org/" />
      <TechButton text="NodeJS" href="https://nodejs.org/" />
      <TechButton text="PostgreSQL" href="https://www.postgresql.org/" />
      <TechButton text="GraphQL" href="https://graphql.org/" />
      <TechButton text="ReactJS" href="https://reactjs.org/" />
      <TechButton text="NextJS" href="https://nextjs.org/" />
      <TechButton text="Jest" href="https://jestjs.io/" />
      <TechButton text="Chakra UI" href="https://chakra-ui.com/" />
      <TechButton text="Linux" href="https://www.linux.org/" />
      <TechButton text="Docker" href="https://www.docker.com/" />
      <TechButton text="Nginx" href="https://www.nginx.com/" />
      <TechButton text="Bitcoin" href="https://bitcoin.org/" />
    </Flex>

    <Text mt={6} textAlign="center">
      In the past, I enjoyed working with:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
      <TechButton text="Unity 3D" href="/" />
      <TechButton text="Django" href="https://www.djangoproject.com/" />
      <TechButton text="FastAPI" href="https://fastapi.tiangolo.com/" />
      <TechButton text="Laravel" href="https://laravel.com/" />
      <TechButton text="VueJS" href="https://vuejs.org/" />
      <TechButton text="Bootstrap" href="https://getbootstrap.com/" />
      <TechButton text="Chromatic" href="https://www.chromatic.com/" />
      <TechButton text="Puppeteer" href="https://pptr.dev/" />
    </Flex>

    <Text mt={6} textAlign="center">
      I&#39;m especially interested in learning:
    </Text>

    <Flex mt={2} wrap="wrap" justifyContent="center">
      <TechButton text="React Native" href="https://reactnative.dev/" />
      <TechButton text="LND" href="https://docs.lightning.engineering/" />
      <TechButton text="Three.js" href="https://threejs.org/" />
      <TechButton text="Rust" href="https://www.rust-lang.org/" />
      <TechButton text="Go" href="https://golang.org/" />
      <TechButton text="Elixir" href="https://elixir-lang.org/" />
    </Flex>
  </section>
)

export default Tech
