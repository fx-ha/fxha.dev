import { Form, Formik } from 'formik'
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { InputField, Layout, TextareaField } from '../components'

const Contact = () => {
  const toast = useToast()

  return (
    <Layout title="Contact | Felix Ha">
      <Flex
        justifyContent="center"
        alignItems="center"
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex
          justifyContent="center"
          mr={{ sm: '10', md: '28' }}
          mb={{ base: '12', sm: 0 }}
        >
          <Box>
            <Heading as="h1" srOnly size="lg">
              Contact
            </Heading>

            <Box>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <Link
                  isExternal
                  href="mailto:felix@fxha.dev"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    leftIcon={<MdEmail size="20px" />}
                  >
                    felix@fxha.dev
                  </Button>
                </Link>

                <Link
                  isExternal
                  href="https://www.google.com/maps/place/Foz+do+Douro/"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    leftIcon={<MdLocationOn size="20px" />}
                  >
                    Porto, Portugal
                  </Button>
                </Link>
              </VStack>
            </Box>

            <HStack
              mt={{ base: '5', sm: '10' }}
              spacing={5}
              px={5}
              alignItems="flex-start"
            >
              <Link href="mailto:felix@fxha.dev" isExternal>
                <IconButton
                  size="lg"
                  variant="ghost"
                  isRound
                  icon={<FaTwitter size={25} />}
                  aria-label="felix on twitter"
                />
              </Link>

              <Link href="https://github.com/fx-ha" isExternal>
                <IconButton
                  size="lg"
                  variant="ghost"
                  isRound
                  icon={<FaGithub size={25} />}
                  aria-label="felix on github"
                />
              </Link>

              <Link href="https://t.me/felixha" isExternal>
                <IconButton
                  size="lg"
                  variant="ghost"
                  isRound
                  icon={<FaTelegramPlane size={25} />}
                  aria-label="felix on telegram"
                />
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex justifyContent="center">
          <Box
            bg={useColorModeValue('gray.50', 'gray.700')}
            shadow="lg"
            rounded="md"
          >
            <Box m={8}>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                onSubmit={async ({ name, email, message }, { resetForm }) => {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify({ name, email, message }),
                  })

                  if (response.ok) {
                    resetForm()
                    // const result = await response.json()
                    toast({
                      title: 'Message sent!',
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                    })
                  } else {
                    toast({
                      title: 'Error!',
                      description: "Can't send message :(",
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    })
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <VStack spacing={5}>
                      <InputField label="Your Name" name="name" isRequired>
                        <BsPerson color="gray.800" />
                      </InputField>

                      <InputField label="Mail" name="email" isRequired>
                        <MdOutlineEmail color="gray.800" />
                      </InputField>

                      <TextareaField
                        label="Message"
                        name="message"
                        isRequired
                      />

                      <FormControl id="submit" float="right">
                        <Button type="submit" isLoading={isSubmitting}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Contact
