import NextLink from 'next/link'
import {
  Flex,
  HStack,
  Icon,
  Link,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex as="nav" alignItems="center" my={6}>
      <NextLink href="/" passHref>
        <Link>
          <Icon
            cursor="pointer"
            viewBox="0 0 300 300"
            color="#276955"
            _hover={{ color: '#369276' }}
            boxSize={8}
          >
            <path
              fill="currentColor"
              d="M147 4c-15 .8-24.2 2.3-37 6.4-4.1 1.4-9.3 2.7-11.4 3.1-5.4.9-23.5 9-30.4 13.6-5.3 3.5-14.9 12.5-29.8 28C33 60.7 28.2 67.4 23 76.2c-.8 1.4-2.3 3.8-3.4 5.2-2.9 4-12.3 33.7-14.3 45-3.4 19.4-1.9 63.5 2.6 74.6 4.8 11.7 15.6 33.8 19.2 39 5.1 7.5 19.6 21.4 29.9 28.7 13.8 9.9 20.7 12.9 49.5 21.8 6.6 2.1 13.8 4.3 16 5.1 6.8 2.2 46.1 2.6 58.5.5 12-2 22.8-5 29.7-8.1 10.2-4.7 27.6-15.6 33.4-21 2.9-2.7 5.7-5 6.1-5 1 0 14.8-16.4 17.9-21.3 7.7-12.3 11.4-19.6 16.9-33.3 11.2-27.9 13.3-41.4 11.1-70.2-.9-12.1-1.6-16-4.6-24.6-1.9-5.6-3.5-11.2-3.5-12.5 0-6.4-15.8-35.7-25.9-47.9-9.2-11.2-48.5-36.5-66.5-42.9-3.9-1.3-31.5-6.5-33.2-6.1-.5.1-7.4.5-15.4.8zm-14 82.6c.8.8 1.3 8.7 1.1 15.1-.2 3.7-3.5 4.6-17 4.5-7.8-.1-12.9.2-13.8.9-1.8 1.6-1.9 31.2 0 32.7.6.5 6.1 1.2 12.1 1.4 9.2.3 11 .6 12.2 2.3 1.8 2.5 1.9 16 .2 17.2-.7.4-6.2.9-12.3 1.1-6 .2-11.6.8-12.2 1.4-1 .8-1.3 6.1-1.3 20.3 0 24.7-.1 25.2-5.4 26.6-5.4 1.5-12.6.6-14.3-1.7-1-1.4-1.3-13-1.3-57 0-30.3.3-57.2.6-59.8.6-4.1 1-4.7 3.8-5.4 4.1-1.1 46.5-.7 47.6.4zm37.4.7c2.3 2.3 2.3 2.5 2.3 29 .1 20.8.4 27.1 1.4 28.3 1.1 1.3 2.7 1.5 8.1 1.2 3.7-.3 7.4-1.1 8.2-1.8 1.3-1 1.6-6 1.8-29 .2-15.3.6-28.1.9-28.4 1.3-1.4 10.6-1.8 14.6-.7 4.1 1.1 4.2 1.2 4.8 6.4.9 7.8.1 116.4-.8 117.4-.5.4-4.7.8-9.3.8-6.4 0-8.7-.4-9.4-1.5-.5-.8-1-10.1-1-20.5 0-10.5-.4-19.5-.8-20.1-1-1.6-15.8-2.5-17-1.1-.6.7-1.2 10.3-1.4 21.4-.1 11.1-.7 20.5-1.1 21-.5.4-4.5.8-8.9.8-6.7 0-8.2-.3-9.4-1.9-1.2-1.7-1.4-11.5-1.4-60.5 0-32.2.4-59.1.8-59.8 1.1-1.8 4.7-2.8 10.3-3.1 4.1-.2 5.4.2 7.3 2.1zm-30.2 7.2c1.2 4.4.3 13.5-1.6 15.3-1.2 1.2-4.1 1.6-14.4 1.6-9.4.1-13.3.5-14.5 1.5-1.4 1.1-1.7 3.4-1.7 13.8 0 12.3 0 12.4-2.2 12.1-2.1-.3-2.2-.7-2.6-14.9-.2-10.6 0-14.9.8-15.4.7-.4 6.9-.8 13.9-.9 6.9-.2 13.4-.6 14.4-1.1 2.5-1.1 3.7-4.6 3.7-10.6 0-4.2.3-5 1.7-4.7.9.2 2 1.6 2.5 3.3zm37.8-.6c.6 1.2 1 11.4 1 26.1v24.1l-2.2-.3-2.3-.3-.3-25.8c-.2-22.2 0-25.7 1.2-25.7.9 0 2 .9 2.6 1.9zm40.4 1.2c1.1 5.6.7 116.8-.4 119-.9 1.6-2.2 1.9-8.8 1.9-4.2 0-8.3-.4-9.1-.9-2.6-1.7.1-3.1 5.9-3.1 4.9 0 6.1-.3 7-2 .8-1.4 1.1-20.3 1-60 0-56.3 0-58 1.9-58 1.3 0 2 .9 2.5 3.1zm-84.6 53.6c2.9 5.7 2.2 15.7-1.1 17.5-1.2.6-6.4 1-12.3.9-9.3-.1-10.4 0-11.4 1.8-.6 1.2-1 10-1 22.3 0 15.9-.3 20.8-1.4 22.3-2.7 3.7-20.3 3.1-18-.6.3-.5 2.3-.9 4.4-.9 6.1 0 8.7-1.4 9.5-5.2.4-1.8.8-11.9.9-22.3.1-10.5.5-19.6 1-20.3.6-1 3-1.3 9-1.1 4.4.2 10-.1 12.2-.5 3.8-.7 4.2-1 4.8-4.4.3-2 .6-5.4.6-7.5 0-3.9 1.3-4.9 2.8-2zm56 21.7c.4 1.7 0 1.8-4.2 1.3-3.8-.6-4.7-.4-5.6 1.3-.6 1-1 9.7-1.1 19.7-.1 9.8-.4 18.9-.8 20.3-.6 2.3-1.2 2.5-7.9 2.8-6.9.3-11.8-1-10.8-2.7.3-.5 3.3-.9 6.8-1 3.4-.1 6.4-.4 6.7-.7.3-.3.8-9.9.9-21.2.2-11.4.8-21.2 1.2-21.7.5-.6 3.7-.8 7.7-.5 5.6.4 6.8.8 7.1 2.4z"
            />
            <path
              fill="currentColor"
              d="M91.3 96.2c-2.4 3.1-3 7.4-1.9 13 1.6 7.9 2.2 7.8 1.8-.4-.5-8.7.3-11.6 3.1-12.8 2.2-.9 2.2-.9.1-.9-1.2-.1-2.6.5-3.1 1.1zM114 95.7c1.4.3 2.9.9 3.4 1.4.6.5 1.4.5 2 0 .6-.5 2.2-1.1 3.6-1.4 1.4-.2-.6-.4-4.5-.4-3.8 0-5.9.2-4.5.4zM90 125.1c0 1.7.4 2.8 1 2.4.6-.3 1-1.7 1-3.1 0-1.3-.4-2.4-1-2.4-.5 0-1 1.4-1 3.1zM89.8 138c-.9 9.5.1 11.2 7.7 12.3l4 .6-3.4-1.2c-5-1.9-6.8-4.8-7-10.8-.1-6.8-.7-7.2-1.3-.9zM109.5 152c-3.4.6-3 .7 3.2.9 3.9 0 7.5-.4 7.8-.9.7-1.1-4.7-1.1-11 0zM90.4 155.1c.3 1.7.7 7.3.7 12.3l.2 9.1.8-7c.9-6.5-.3-17.5-1.8-17.5-.3 0-.3 1.4.1 3.1zM90.5 191.5c.2 4.4.5 8.4.5 8.9s.3.6.7.2c1-1 .4-13.7-.8-15.6-.5-.9-.7 1.5-.4 6.5zM160.8 99.9c-.2 1.6-.1 5.1.3 7.7.6 4.5.6 4.2.8-2.9.1-7.9-.3-9.9-1.1-4.8zM200.1 106.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zM161.2 124.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zM162.2 139c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3zM201.3 138.5c-.3.9-.3 1.8-.1 2.1.3.3.8-.4 1.1-1.6.6-2.3-.1-2.7-1-.5zM201 150.2c0 2.8-.5 3.7-2.2 4.3l-2.3.8 2.3.4c2.1.4 2.2.9 2.3 10.6 0 7.9.3 9.6 1 7.7 1-2.3.4-25.9-.7-26.9-.2-.2-.4 1.2-.4 3.1zM161.9 154c-.3.8-.5 3.4-.4 5.7.2 2.6-.2 4.7-1.1 5.4-1.1.9-1.1 1.3 0 2.5.9.8 1.4 3.9 1.5 8.5.2 10.6 1.1 9.7 1.3-1.2 0-5.2.1-11 .2-12.9l.1-3.5 6.6.3c4.1.3 6.9 0 7.3-.7.5-.8-1.6-1.1-6.8-1.1-7 0-7.5-.1-7.8-2.3-.2-1.6-.5-1.8-.9-.7zM183.5 157c.8 1.3 4.5 1.3 6.5 0 1.1-.7.3-1-2.8-1-2.6 0-4.1.4-3.7 1zM162 194.2c0 1.9.2 2 1 .8 1.3-1.9 1.3-3 0-3-.5 0-1 1-1 2.2zM163.2 202c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3zM203.1 202.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3z"
            />
          </Icon>
        </Link>
      </NextLink>

      <Spacer />

      <HStack spacing={3}>
        <NextLink href="/projects" passHref>
          <Link>Projects</Link>
        </NextLink>
        <Text>|</Text>
        <NextLink href="/contact" passHref>
          <Link>Contact</Link>
        </NextLink>
        <Text>|</Text>
        <Icon
          as={isDark ? BiSun : BiMoon}
          onClick={toggleColorMode}
          cursor="pointer"
          boxSize={5}
        />
      </HStack>
    </Flex>
  )
}

export default Navigation
