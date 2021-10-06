import Image from 'next/image'
import NextLink from 'next/link'
import {
  Button,
  Box,
  Heading,
  Flex,
  Link,
  Stack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'

const ProjectsPreview = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <section>
      <Heading as="h2" size="lg" mt={12}>
        Projects
      </Heading>

      <Flex mt={4} justifyContent="center" alignItems="center">
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Flex alignItems="center">
            <VStack align="left" spacing={6}>
              <Text>
                In 2021 I worked for{' '}
                <Link isExternal href="https://sideshift.ai/a/discount">
                  SideShift.ai
                </Link>{' '}
                as a Backend Engineer. Sideshift is a no-sign-up cryptocurrency
                exchange.
              </Text>
              <Text>
                My tasks involved implementing new features, automating
                processes, building admin interfaces, and fixing bugs.
              </Text>
              <Text>
                Tech: Typescript, React, PostgreSQL, GraphQL, Redis, Storybook,
                Jest
              </Text>
            </VStack>
          </Flex>

          <Box maxW={{ base: '100%', sm: '50%' }}>
            <Link
              mt={{ base: 3, sm: 0 }}
              isExternal
              href="https://sideshift.ai/a/discount"
            >
              <Image
                src={
                  isDark
                    ? '/images/sideshift_dark.png'
                    : '/images/sideshift_light.png'
                }
                alt="image of sideshift.ai"
                width={967}
                height={856}
              />
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Flex mt={4} justifyContent="center">
        <NextLink href="/projects" passHref>
          <Button>More</Button>
        </NextLink>
      </Flex>
    </section>
  )
}

export default ProjectsPreview
