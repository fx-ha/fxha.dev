import Image from 'next/image'
import { Box, Flex, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { useLang } from '../utils'

const projectSectionContent = {
  en: {
    description: 'Description',
    tasks: 'Tasks',
  },
  de: {
    description: 'Beschreibung',
    tasks: 'Aufgaben',
  },
}

const ProjectSection = ({
  url,
  imagePath,
  title,
  descriptionContent,
  tasksContent,
  tools,
}: {
  url: string
  imagePath: string
  title: string
  descriptionContent: string
  tasksContent: string
  tools: string
}) => {
  const lang = useLang()
  const { description, tasks } = projectSectionContent[lang]

  return (
    <Box as="section" id={title} mb="20">
      <Heading as="h2" size="md" mb="4" cursor="pointer">
        <Link title={`Visit ${title}`} isExternal href={url}>
          {title}
        </Link>
      </Heading>

      <Flex justifyContent="center" alignItems="center">
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Flex
            alignItems="center"
            mr={{ base: 0, sm: '9' }}
            mb={{ base: '4', sm: 0 }}
            w={{ base: '100%', sm: '50%' }}
          >
            <VStack align="left" spacing={6}>
              <Text textAlign="justify">
                {description}: {descriptionContent}
              </Text>
              <Text textAlign="justify">
                {tasks}: {tasksContent}
              </Text>
              <Text textAlign="justify">Tools: {tools}</Text>
            </VStack>
          </Flex>

          <Box
            mt={{ base: 4, sm: 0 }}
            w={{ base: '100%', sm: '50%' }}
            filter="drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.3))"
          >
            <Link isExternal href={url}>
              <Image
                title={`Visit ${title}`}
                src={imagePath}
                alt={`image of ${title}`}
                width={967}
                height={856}
                objectFit="cover"
              />
            </Link>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default ProjectSection
