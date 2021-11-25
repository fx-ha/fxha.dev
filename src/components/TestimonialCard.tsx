import NextImage from 'next/image'
import {
  Box,
  Flex,
  Icon,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ImQuotesLeft } from 'react-icons/im'

const TestimonalCard = ({
  quote,
  link,
  company,
  author,
  img,
}: {
  quote: string
  link: string
  company: string
  author: string
  img: string
}) => {
  return (
    <Box flex="none" boxSize="full">
      <Flex
        w={{ base: '90%', sm: 'md' }}
        mx="auto"
        px={{ base: '3', sm: '8' }}
        pt={{ base: '5', sm: '8' }}
        pb={{ base: '5', sm: '7' }}
        bg={useColorModeValue('gray.50', 'gray.700')}
        shadow="lg"
        rounded="md"
        direction={{ base: 'column-reverse', sm: 'row' }}
        alignItems="center"
        mt="3"
      >
        <Icon
          as={ImQuotesLeft}
          aria-label="Quote"
          boxSize="6"
          mt="-28"
          position="absolute"
          visibility={{ base: 'hidden', sm: 'visible' }}
        />

        <Flex direction="column">
          <Text mb="1">{quote}</Text>

          <Text>
            <Link
              isExternal
              href={link}
              title={`Visit ${company}`}
              _hover={{ textDecoration: 'none' }}
              fontSize="0.8rem"
            >
              <Box as="span" fontWeight="bold">
                {author}
              </Box>
              <Box as="span" color={useColorModeValue('gray.400', 'gray.500')}>
                {' - '}
                {company}
              </Box>
            </Link>
          </Text>
        </Flex>

        <Spacer />

        <Link isExternal href={link} mb={{ base: '3', sm: '0' }}>
          <Box
            borderRadius="3xl"
            overflow="hidden"
            w={{ base: '9', sm: '12' }}
            h={{ base: '9', sm: '12' }}
          >
            <NextImage
              src={img}
              width={1}
              height={1}
              layout="responsive"
              alt={author}
              title={author}
              priority
            />
          </Box>
        </Link>
      </Flex>
    </Box>
  )
}

export default TestimonalCard
