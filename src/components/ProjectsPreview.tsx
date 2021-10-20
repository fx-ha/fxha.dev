import Image from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Heading,
  Flex,
  Link,
  Stack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import { useLang } from '../utils'

const projectsContent = {
  en: {
    heading: 'Projects',
    p11: 'In 2021, I worked for',
    p12: 'as a Backend Engineer. Sideshift is a strongly automated cryptocurrency exchange that serves as a bridge between different blockchains.',
    p2: 'My tasks included improving automation, adding new features, extending the API, building admin interfaces, and fixing bugs.',
  },
  de: {
    heading: 'Projekte',
    p11: '2021 habe ich für',
    p12: 'als Backend-Entwickler gearbeitet. Sideshift ist eine stark automatisierte Tauschbörse für Kryptowährungen, die als Brücke zwischen verschiedenen Blockchains dient.',
    p2: 'Meine Aufgabe war, Prozesse zu automatisieren, neue Funktionen zu implementieren, das API zu erweitern, grafische Oberflächen für Administratoren zu bauen und Fehler zu beheben.',
  },
}

const ProjectsPreview = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const lang = useLang()
  const { heading, p11, p12, p2 } = projectsContent[lang]

  return (
    <Box as="section" mb="24">
      <Heading as="h2" size="lg">
        {heading}
      </Heading>

      <Flex mt="8" justifyContent="center" alignItems="center">
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Flex alignItems="center">
            <VStack align="left" spacing={6}>
              <Text>
                {p11}{' '}
                <Link isExternal href="https://sideshift.ai/a/discount">
                  SideShift.ai
                </Link>{' '}
                {p12}
              </Text>
              <Text>{p2}</Text>
              <Text>
                Tech: Typescript, React, PostgreSQL, GraphQL, Redis, Storybook,
                Jest
              </Text>
            </VStack>
          </Flex>

          <Box mt={{ base: 4, sm: 0 }} maxW={{ base: '100%', sm: '50%' }}>
            <Link isExternal href="https://sideshift.ai/a/discount">
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

      <Flex mt="6" justifyContent="center">
        <NextLink href="/projects" passHref>
          <Link _hover={{ textDecoration: 'none' }}>
            <Button>More</Button>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  )
}

export default ProjectsPreview
