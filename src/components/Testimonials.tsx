import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useLang } from '../utils'
import { TestimonialCard } from '.'

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

  const slides = [
    {
      quote: sideshiftQuote,
      author: 'Blake',
      company: 'SideShift.ai',
      img: '/images/sideshift.png',
      link: 'https://sideshift.ai/a/discount',
    },
    {
      quote: brandmarkerQuote,
      author: 'Andreas',
      company: 'Brandmarker',
      img: '/images/brandmarker.jpg',
      link: 'https://www.agentur-brandmarker.de/',
    },
    {
      quote: tacQuote,
      author: 'Donata',
      company: 'Theater am Campus',
      img: '/images/tacLogo.png',
      link: 'https://www.theateramcampus.de/',
    },
    {
      quote: sztorcQuote,
      author: 'Paul',
      company: 'Bitcoin Researcher',
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
            <TestimonialCard
              key={i}
              author={slide.author}
              company={slide.company}
              img={slide.img}
              link={slide.link}
              quote={slide.quote}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Testimonials
