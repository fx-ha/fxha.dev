import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react'
import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { useLang } from '../utils'

const contactContent = {
  en: {
    heading: 'Contact',
    p1: 'If you want to know more about my projects or have an interesting offer, you can reach me here:',
  },
  de: {
    heading: 'Kontakt',
    p1: 'Wenn Du mehr über meine Projekte erfahren möchtest oder ein interessantes Angebot hast, kannst Du mich hier erreichen:',
  },
}

const ContactPreview = () => {
  const lang = useLang()
  const { heading, p1 } = contactContent[lang]

  return (
    <Box as="section" id="contact" mb="16">
      <Heading as="h2" size="lg">
        {heading}
      </Heading>

      <Text mt="8" textAlign="center">
        {p1}
      </Text>

      <Flex mt="5" alignItems="center" justifyContent="center">
        <HStack spacing={50}>
          <Link href="mailto:felix@fxha.dev" isExternal>
            <IconButton
              size="lg"
              icon={<BiMailSend size={35} />}
              aria-label="send felix an email"
            />
          </Link>

          <Link href="https://github.com/fx-ha" isExternal>
            <IconButton
              size="lg"
              icon={<FaGithub size={30} />}
              aria-label="felix on github"
            />
          </Link>

          <Link href="https://t.me/felixha" isExternal>
            <IconButton
              size="lg"
              icon={<FaTelegramPlane size={30} />}
              aria-label="felix on telegram"
            />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default ContactPreview
