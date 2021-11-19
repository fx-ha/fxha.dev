import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import { ImQuotesLeft } from 'react-icons/im'
import { useLang } from '../utils'

const testimonialsContent = {
  en: {
    tacQuote: 'Thanks for the good explanations.',
    brandmarkerQuote: 'Excellent work with the store locator.',
    sztorcQuote: 'Great Bitcoin fee website.',
    sideshiftQuote: 'It was a pleasure working with you.',
  },
  de: {
    tacQuote: 'Danke für die guten Erklärungen.',
    brandmarkerQuote: 'Klasse Arbeit beim Store-Locator.',
    sztorcQuote: 'Tolle Website über Bitcoin-Gebühren.',
    sideshiftQuote: 'Es war eine Freude mit Dir zu arbeiten.',
  },
}

const SLIDES_INTERVAL_TIME = 4000

const Testimonials = () => {
  const lang = useLang()
  const { brandmarkerQuote, sideshiftQuote, sztorcQuote, tacQuote } =
    testimonialsContent[lang]
  const [currentSlide, setCurrentSlide] = useState(0)

  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const slides = [
    {
      quote: sideshiftQuote,
      author: 'SideShift.ai',
      img: '/images/sideshift.png',
      link: 'https://sideshift.ai/a/discount',
    },
    {
      quote: brandmarkerQuote,
      author: 'Brandmarker',
      img: '/images/brandmarker.jpg',
      link: 'https://www.agentur-brandmarker.de/',
    },
    {
      quote: tacQuote,
      author: 'Theater am Campus',
      img: '/images/tacLogo.png',
      link: 'https://www.theateramcampus.de/',
    },
    {
      quote: sztorcQuote,
      author: 'Bitcoin Researcher',
      img: '/images/twitter.png',
      link: 'https://twitter.com/Truthcoin/status/1368965437275389953',
    },
  ]

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1))
    }, SLIDES_INTERVAL_TIME)

    return () => clearInterval(automatedSlide)
  }, [slides.length])

  return (
    <Flex as="section" id="testimonials" mb="28" justifyContent="center">
      <Flex w="full" overflow="hidden">
        <Flex
          pos="relative"
          w="full"
          mb="5"
          transition="all 1.5s"
          ml={`-${currentSlide * 100}%`}
        >
          {slides.map((slide, i) => (
            <Box key={i} flex="none" boxSize="full">
              <Flex
                w={{ base: '90%', sm: 'md' }}
                mx="auto"
                p={{ base: '3', sm: '8' }}
                bg={isDark ? 'gray.700' : 'gray.50'}
                shadow="lg"
                rounded="md"
                direction={{ base: 'column-reverse', md: 'row' }}
                alignItems="center"
                mt="3"
              >
                <Icon
                  as={ImQuotesLeft}
                  aria-label="Quote"
                  boxSize="6"
                  mt={{ md: '-28' }}
                  position="absolute"
                  visibility={{ base: 'hidden', md: 'visible' }}
                />

                <Flex direction="column">
                  <Text mb="2">{slide.quote}</Text>

                  <Link
                    isExternal
                    href={slide.link}
                    fontSize="0.8rem"
                    fontWeight="bold"
                  >
                    {slide.author}
                  </Link>
                </Flex>

                <Spacer />

                <Link isExternal href={slide.link} mb={{ base: '5', md: '0' }}>
                  <Box borderRadius="3xl" overflow="hidden" w="12" h="12">
                    <NextImage
                      src={slide.img}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt={slide.author}
                      title={slide.author}
                      priority
                    />
                  </Box>
                </Link>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Testimonials
