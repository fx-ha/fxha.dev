import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Heading,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { shimmer, toBase64, useLang } from '../utils'

const projectsContent = {
  en: {
    heading: 'Projects',
    p11: 'In 2021, I worked for',
    p12: 'as a Backend Engineer. Sideshift is a heavily automated exchange for digital currencies and serves as a bridge between different blockchains.',
    p2: 'My tasks included improving automation, adding new features, extending the API, building admin interfaces, and fixing bugs.',
    button: 'More',
  },
  de: {
    heading: 'Projekte',
    p11: '2021 habe ich für',
    p12: 'als Backend-Entwickler gearbeitet. Sideshift ist eine stark automatisierte Tauschbörse für digitale Währungen, die als Brücke zwischen diversen Blockchains dient.',
    p2: 'Zu meinen Aufgaben zählte, Prozesse zu automatisieren, das API zu erweitern, grafische Oberflächen für Admins zu erstellen und Fehler zu beheben.',
    button: 'Mehr',
  },
}

const ProjectsPreview = () => {
  const lang = useLang()
  const { heading, p11, p12, p2, button } = projectsContent[lang]

  const router = useRouter()

  return (
    <Box as="section" id="projects" mb="24">
      <Heading as="h2" size="lg">
        {heading}
      </Heading>

      <Flex mt="8" justifyContent="center" alignItems="center">
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Flex
            alignItems="center"
            mr={{ base: 0, sm: '9' }}
            mb={{ base: '4', sm: 0 }}
            w={{ base: '100%', sm: '50%' }}
          >
            <VStack align="left" spacing={6}>
              <Text textAlign="justify">
                {p11}{' '}
                <Link
                  isExternal
                  href="https://sideshift.ai/a/discount"
                  fontWeight="bold"
                >
                  SideShift.ai
                </Link>{' '}
                {p12}
              </Text>
              <Text textAlign="justify">{p2}</Text>
              <Text textAlign="justify">
                Tools: Typescript, React, PostgreSQL, GraphQL, Redis, Storybook,
                Jest
              </Text>
            </VStack>
          </Flex>

          <Box
            mt={{ base: 4, sm: 0 }}
            w={{ base: '100%', sm: '50%' }}
            filter="drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.3))"
          >
            <Link isExternal href="https://sideshift.ai/a/discount">
              <Image
                title="Visit SideShift.ai"
                src={useColorModeValue(
                  '/images/sideshift_light.png',
                  '/images/sideshift_dark.png'
                )}
                alt="image of sideshift.ai"
                width={967}
                height={856}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(967, 856)
                )}`}
              />
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Flex mt="6" justifyContent="center">
        <Button onClick={() => router.push('/projects')}>{button}</Button>
      </Flex>
    </Box>
  )
}

export default ProjectsPreview
