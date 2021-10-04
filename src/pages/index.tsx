import NextLink from 'next/link'
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Layout, TechButton } from '../components'

const Index = () => (
  <Layout>
    <Heading textAlign="center" mt={5}>
      Hi! I&#39;m Felix.
    </Heading>

    <Text mt={6}>
      I&#39;m a Full-stack Web Developer currently living in Germany 🇩🇪. I love
      working with Typescript and React. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Itaque sapiente dolores consectetur nam omnis culpa odio
      corporis? Possimus dolorum pariatur sit libero, amet dolorem voluptatum,
      voluptates, laborum ab culpa in!
    </Text>

    <Text mt={3}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      voluptate ad, enim sequi quos aut mollitia facilis expedita eum sint
      suscipit dolorum velit consequatur nihil, quod minima adipisci delectus.
      Doloremque.
    </Text>

    <Heading mt={12}>Tech</Heading>
    <Text mt={4} textAlign="center">
      Current tech that I&#39;m interested in and that I use on a day-to-day
      basis:
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
      <TechButton text="Django" href="https://www.djangoproject.com/" />
      <TechButton text="FastAPI" href="https://fastapi.tiangolo.com/" />
      <TechButton text="MySQL" href="https://www.mysql.com/" />
      <TechButton text="Laravel" href="https://laravel.com/" />
      <TechButton text="Chromatic" href="https://www.chromatic.com/" />
      <TechButton text="Bootstrap" href="https://getbootstrap.com/" />
    </Flex>

    <Heading mt={12}>Projects</Heading>
    <Flex mt={4} justifyContent="center" alignItems="center">
      <Stack direction={['column', 'row']}>
        <Text maxW={{ base: '100%', sm: '50%' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          consequuntur ipsa veniam, saepe dolor sint corporis ducimus accusamus
          consectetur ab vel ipsam placeat fuga enim. Nihil cupiditate officiis
          repellat ea!
        </Text>
        <Text>(image of sideshift.ai)</Text>
      </Stack>
    </Flex>

    <Flex mt={3} justifyContent="center">
      <NextLink href="/projects" passHref>
        <Button size="sm">More</Button>
      </NextLink>
    </Flex>

    <Heading mt={12}>Let&#39;s have a chat!</Heading>
    <Text mt={4}>
      If you want to know more of what I&#39;m up to or just have a quick chat,
      you can reach me here.
    </Text>
  </Layout>
)

export default Index
