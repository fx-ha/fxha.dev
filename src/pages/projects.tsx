import { Heading, useColorMode } from '@chakra-ui/react'
import { Layout, ProjectSection } from '../components'
import { useLang } from '../utils'

const projectsContent = {
  en: {
    heading: 'Projects',
    sideshift: {
      p1: 'In 2021, I worked for SideShift.ai as a Backend Engineer. Sideshift is a heavily automated exchange for digital currencies that serves as a bridge between different blockchains.',
      p2: 'My tasks included improving automation, adding new features, extending the API, building admin interfaces, and fixing bugs.',
    },
    haro: {
      // p1: '...admin interfaces...',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    sunmarin: {
      // p1: 'from adobe design to reponsive website with html css bootstrap',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    wegmann: {
      // p1: 'storelocator admin',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    tac: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      // p1: 'solo project for theater group organized by the university of bayreuth',
      // p2: 'Theater am Campus...highlight limited budget, hosted for free on Heroku and Vercel, only recurring cost is domain name... highlight user friendly cms wagtail... frontend with next js, responsive, incremental static regeneration, forms, calendar, ...',
    },
    rw11: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    drivechainexchange: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      // p1: 'exchange and coin news',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    whatthefiatfee: {
      // p1: 'more user friendly version of whatthefee.io',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    siasocial: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    askaspecialist: {
      // p1: 'submit question, get answer from specialist, pay for professional advice',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    wsbmentions: {
      // p1: 'reddit api and image analysis with ocr by tesseract',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    leveld: {
      // p1: 'letterboxd inspired diary for videogames',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    lnreddit: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
  },
  de: {
    heading: 'Projekte',
    sideshift: {
      p1: '2021 habe ich für SideShift.ai als Backend-Entwickler gearbeitet. Sideshift ist eine stark automatisierte Tauschbörse für Kryptowährungen, die als Brücke zwischen verschiedenen Blockchains dient.',
      p2: 'Meine Aufgabe war, Prozesse zu automatisieren, neue Funktionen zu implementieren, das API zu erweitern, grafische Oberflächen für Administratoren zu bauen und Fehler zu beheben.',
    },
    haro: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    sunmarin: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    wegmann: {
      // p1: 'storelocator admin',
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    tac: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    rw11: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    drivechainexchange: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    whatthefiatfee: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    siasocial: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    askaspecialist: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    wsbmentions: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    leveld: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
    lnreddit: {
      p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
      p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia quod, sunt minus doloremque ipsum cumque ipsam dolore odio at ratione ex ipsa officia minima eum ea a possimus nesciunt.',
    },
  },
}

const Projects = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const lang = useLang()
  const {
    heading,
    sideshift,
    haro,
    sunmarin,
    wegmann,
    tac,
    // rw11,
    whatthefiatfee,
    drivechainexchange,
    wsbmentions,
  } = projectsContent[lang]

  return (
    <Layout title={`${heading} | Felix Ha`}>
      <Heading as="h1" size="lg" mb="10">
        {heading}
      </Heading>

      <ProjectSection
        title="SideShift.ai"
        url="https://sideshift.ai/a/discount"
        imagePath={
          isDark ? '/images/sideshift_dark.png' : '/images/sideshift_light.png'
        }
        p1={sideshift.p1}
        p2={sideshift.p2}
        tech="Typescript, React, PostgreSQL, GraphQL, Redis, Storybook, Jest"
      />

      <ProjectSection
        title="Haro.com"
        url="https://haro.com"
        imagePath="/images/haro.png"
        p1={haro.p1}
        p2={haro.p2}
        tech="PHP, Javascript, Laravel, Vue.js, MySQL, Redis, Bootstrap, SCSS"
      />

      <ProjectSection
        title="Sunmarin.de"
        url="https://sunmarin.de"
        imagePath="/images/sunmarin.png"
        p1={sunmarin.p1}
        p2={sunmarin.p2}
        tech="PHP, Javascript, HTML, SCSS, Bootstrap"
      />

      <ProjectSection
        title="Wegmann Automotive - Store Locator"
        url="https://www.wegmann-automotive.com/us/dealer/"
        imagePath="/images/wegmann.png"
        p1={wegmann.p1}
        p2={wegmann.p2}
        tech="PHP, Javascript, Laravel, MySQL, Alpine.js, Bootstrap"
      />

      <ProjectSection
        title="Theater am Campus"
        url="https://theateramcampus.de"
        imagePath="/images/tac.png"
        p1={tac.p1}
        p2={tac.p2}
        tech="Python, Django, Wagtail CMS, PostgreSQL, React, Next.js, Bootstrap"
      />

      {/* <ProjectSection
        title="RW11"
        url="https://rw11.de"
        imagePath={
          isDark ? '/images/sideshift_dark.png' : '/images/sideshift_light.png'
        }
        p1={rw11.p1}
        p2={rw11.p2}
        tech="Python, Django, Javascript, Bootstrap"
      /> */}

      <ProjectSection
        title="WhatTheFiatFee"
        url="https://whatthefiatfee.vercel.app"
        imagePath={isDark ? '/images/wtff.png' : '/images/wtffL.png'}
        p1={whatthefiatfee.p1}
        p2={whatthefiatfee.p2}
        tech="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, NextJS, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="Drivechain Exchange"
        url="https://drivechain.exchange"
        imagePath={
          isDark ? '/images/driveexchange.png' : '/images/driveexchangeL.png'
        }
        p1={drivechainexchange.p1}
        p2={drivechainexchange.p2}
        tech="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, Next.js, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="WallStreetBets Mentions"
        url="https://wsb-mentions.vercel.app/"
        imagePath="/images/wsbmentions.png"
        p1={wsbmentions.p1}
        p2={wsbmentions.p2}
        tech="Python, Pyppeteer, Tesseract OCR, React, Next.js, Recharts"
      />
    </Layout>
  )
}

export default Projects
