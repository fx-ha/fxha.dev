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

const ContactPreview = () => (
  <Box as="section" mt={16} mb={10}>
    <Heading as="h2" size="lg">
      Contact
    </Heading>

    <Text mt={4} textAlign="center">
      If you want to know more about my projects or have an interesting offer,
      you can reach me here:
    </Text>

    <Flex mt={3} alignItems="center" justifyContent="center">
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

export default ContactPreview
