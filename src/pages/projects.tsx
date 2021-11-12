import { Heading, useColorMode } from '@chakra-ui/react'
import { Layout, ProjectSection } from '../components'
import { useLang } from '../utils'

const projectsContent = {
  en: {
    heading: 'Projects',
    sideshift: {
      p1: 'Description: SideShift.ai is a heavily automated exchange for digital currencies that serves as a bridge between different blockchains.',
      p2: 'Tasks: Improving automation, adding new features, extending the API, building admin interfaces, fixing bugs.',
    },
    haro: {
      p1: "Description: Haro.com is the e-commerce site for Germany's leading parquet manufacturer.",
      p2: 'Tasks: Building CRUD interfaces for admins, extending the API, fixing bugs, redesigning the frontend',
    },
    sunmarin: {
      p1: 'Description: Sunmarin.de is the e-commerce site for Sunmarin by Riedl, one of the leading manufacturers of swimwear & beachwear in Europe.',
      p2: 'Tasks: Translating mockups to HTML and CSS, ensuring compatibility for all device sizes with responsive design, adding automatic language detection, following SEO best practices',
    },
    wegmann: {
      p1: 'Description: Wegmann automotive is the world’s leader in the field of wheel balance weights. The store locator helps visitors find the closest dealership.',
      p2: 'Tasks: Building the API with a relational database and CRUD admin interface for the store locator',
    },
    tac: {
      p1: 'Description: Theater am Campus is a student organization from the University of Bayreuth. The site includes projects of all theater groups, with an event calendar and ticket reservation.',
      p2: 'Tasks: Communicating with client, minimizing hosting costs to zero, UI and UX design, building a CMS for admins',
    },
    rw11: {
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    drivechainexchange: {
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    whatthefiatfee: {
      // p1: 'more user friendly version of whatthefee.io',
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    siasocial: {
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    askaspecialist: {
      // p1: 'submit question, get answer from specialist, pay for professional advice',
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    wsbmentions: {
      // p1: 'reddit api and image analysis with ocr by tesseract',
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    leveld: {
      // p1: 'letterboxd inspired diary for videogames',
      p1: 'Description:',
      p2: 'Tasks: ',
    },
    lnreddit: {
      p1: 'Description:',
      p2: 'Tasks: ',
    },
  },
  de: {
    heading: 'Projekte',
    sideshift: {
      p1: 'Beschreibung: SideShift.ai ist eine stark automatisierte Tauschbörse für Kryptowährungen, die als Brücke zwischen verschiedenen Blockchains dient.',
      p2: 'Aufgaben: Prozesse automatisieren, neue Funktionen implementieren, API erweitern, grafische Oberflächen für Administratoren erstellen, Fehler beheben',
    },
    haro: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    sunmarin: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    wegmann: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
    },
    tac: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    rw11: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
    },
    drivechainexchange: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    whatthefiatfee: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    siasocial: {
      p1: 'Beschreibung:',
      p2: 'Aufgaben: ',
    },
    askaspecialist: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
    },
    wsbmentions: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
    },
    leveld: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
    },
    lnreddit: {
      p1: 'Beschreibung: ',
      p2: 'Aufgaben: ',
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
