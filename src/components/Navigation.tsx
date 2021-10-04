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
    <Flex alignItems="center" my={6}>
      <NextLink href="/">
        <Link>FH</Link>
      </NextLink>

      <Spacer />

      <HStack spacing={3}>
        <NextLink href="/projects">
          <Link>Projects</Link>
        </NextLink>
        <Text>|</Text>
        <NextLink href="/contact">
          <Link>Contact</Link>
        </NextLink>
        <Text>|</Text>
        <Icon
          as={isDark ? BiSun : BiMoon}
          onClick={toggleColorMode}
          cursor="pointer"
          w={5}
          h={5}
        />
      </HStack>
    </Flex>
  )
}

export default Navigation
