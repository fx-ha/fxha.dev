import { Heading, useColorMode } from '@chakra-ui/react'
import { Layout, ProjectSection } from '../components'
import { useLang } from '../utils'

const projectsContent = {
  en: {
    heading: 'Projects',
    sideshift: {
      description:
        'SideShift.ai is a heavily automated exchange for digital currencies that serves as a bridge between different blockchains.',
      tasks:
        'Improving automation, adding new features, extending the API, building admin interfaces, fixing bugs',
    },
    haro: {
      description:
        "Haro.com is the e-commerce site for Germany's leading parquet manufacturer.",
      tasks:
        'Building CRUD interfaces for admins, extending the API, fixing bugs, redesigning the frontend',
    },
    sunmarin: {
      description:
        'Sunmarin.de is the e-commerce site for Sunmarin by Riedl, one of the leading manufacturers of swimwear & beachwear in Europe.',
      tasks:
        'Translating mockups to HTML and CSS, ensuring compatibility for all device sizes with responsive design, adding automatic language detection, following SEO best practices',
    },
    wegmann: {
      description:
        'Wegmann automotive is the world’s leader in the field of wheel balance weights. The store locator helps visitors find the closest dealership.',
      tasks:
        'Tasks: Building the API with a relational database, CRUD admin interface for the store locator',
    },
    tac: {
      description:
        'Theater am Campus is a student organization from the University of Bayreuth. The site includes projects of all theater groups, with an event calendar and ticket reservation.',
      tasks:
        'Communicating with client, minimizing hosting costs, UI and UX design, building a CMS for admins',
    },
    rw11: {
      description: '...',
      tasks: '...',
    },
    drivechainexchange: {
      description:
        'Hobby project to test new releases of Bitcoin beta software. It enables transfers between different blockchains (Exchange) and tracks blockchain data (CoinNews).',
      tasks:
        "full-stack development, setting up bitcoin nodes, low-cost deployment on a VPS and Vercel's CDN (Frontend)",
    },
    whatthefiatfee: {
      description:
        'Takes the fee estimation from the original WhatTheFee.io and converts it to different currencies as well as adding helpful calculators and tracking historical data.',
      tasks:
        "full-stack development, free deployment on Heroku (Backend) and Vercel's CDN (Frontend)",
    },
    siasocial: {
      description: '...',
      tasks: '...',
    },
    askaspecialist: {
      description:
        'submit question, get answer from specialist, pay for professional advice',
      tasks: '...',
    },
    wsbmentions: {
      description:
        'Analyzes the r/wallstreetbets subreddit with optical character recognition to track stock ticker mentions in images, memes and headlines.',
      tasks:
        "full-stack development, free deployment on Heroku (Backend) and Vercel's CDN (Frontend)",
    },
    leveld: {
      description: 'letterboxd inspired diary for videogames',
      tasks: '...',
    },
    lnreddit: {
      description: '...',
      tasks: '...',
    },
  },
  de: {
    heading: 'Projekte',
    sideshift: {
      description:
        'SideShift.ai ist eine stark automatisierte Tauschbörse für digitale Währungen, die als Brücke zwischen verschiedenen Blockchains dient.',
      tasks:
        'Prozesse automatisieren, API erweitern, grafische Oberflächen für Admins erstellen, Fehler beheben',
    },
    haro: {
      description:
        'Haro.com ist die E-Commerce-Seite für Deutschlands führenden Parkett-Hersteller.',
      tasks:
        'grafische Oberflächen mit CRUD-Funktionen für Admins erstellen, API erweitern, Fehler beheben, Frontend neu gestalten',
    },
    sunmarin: {
      description:
        'E-Commerce-Seite für Sunmarin von Riedl, einer der führenden Hersteller von Bademoden in Europa.',
      tasks:
        'Design-Mockups in HTML und CSS übertragen, kompatibel mit allen Gerätegrößen, automatische Spracherkennung, optimieren für Suchmaschinen',
    },
    wegmann: {
      description:
        'WEGMANN automotive ist Weltmarktführer für Auswuchtgewichte. Mit dem Store-Locator können Besucher der Seite den nächsten Händler finden.',
      tasks:
        'API für den Store-Locator erweitern, in relationale Datenbank integrieren, grafische Benutzeroberfläche mit CRUD-Funktionen für Admins erstellen',
    },
    tac: {
      description:
        'Theater am Campus ist ein Studentenverein der Uni Bayreuth. Die Seite listet Projekte aller Theatergruppen, mit Veranstaltungskalendar und Funktionen zur Ticket-Reservierung.',
      tasks:
        'Projektplanung mit streng limitiertem Budget, Hosting-Kosten minimieren, Full-stack-Entwicklung, CMS für Admins, automatischer Mailversand',
    },
    rw11: {
      description: '...',
      tasks: '...',
    },
    drivechainexchange: {
      description:
        'Hobby-Projekt zum Betatesten von Bitcoin-Software. Ermöglicht den Transfer zwischen Blockchains (Exchange) und verfolgt Blockchain-Daten (CoinNews).',
      tasks:
        'Full-stack-Entwicklung, einrichten von Bitcoin Nodes, kostengünstiges Hosten mit VPS und Vercels CDN (Frontend)',
    },
    whatthefiatfee: {
      description:
        'Nimmt die Gebühren-Prognosen von WhatTheFee.io und rechnet sie in verschiedene Währungen um, hilft bei der Berechnung von Transaktionsgrößen und visualisiert vergangene Transaktionsgebühren.',
      tasks:
        'full-stack development, kostenloses Hosting mit Heroku (Backend) and Vercels CDN (Frontend)',
    },
    siasocial: {
      description: '...',
      tasks: '...',
    },
    askaspecialist: {
      description: '...',
      tasks: '...',
    },
    wsbmentions: {
      description:
        'Analisiert das Subreddit r/wallstreetbets mithilfe von Optical Character Recognition, um Erwähnungen von Aktien in Bildern, Memes und Überschriften zu zählen und zu visualisieren.',
      tasks:
        'full-stack development, kostenloses Hosting mit Heroku (Backend) and Vercels CDN (Frontend)',
    },
    leveld: {
      description: '...',
      tasks: '...',
    },
    lnreddit: {
      description: '...',
      tasks: '...',
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
        descriptionContent={sideshift.description}
        tasksContent={sideshift.tasks}
        tools="Typescript, React, PostgreSQL, GraphQL, Redis, Storybook, Jest"
      />

      <ProjectSection
        title="Haro.com"
        url="https://haro.com"
        imagePath="/images/haro.png"
        descriptionContent={haro.description}
        tasksContent={haro.tasks}
        tools="PHP, Javascript, Laravel, Vue.js, MySQL, Redis, Bootstrap, SCSS"
      />

      <ProjectSection
        title="Sunmarin.de"
        url="https://sunmarin.de"
        imagePath="/images/sunmarin.png"
        descriptionContent={sunmarin.description}
        tasksContent={sunmarin.tasks}
        tools="PHP, Javascript, HTML, SCSS, Bootstrap"
      />

      <ProjectSection
        title="Wegmann Automotive - Store Locator"
        url="https://www.wegmann-automotive.com/us/dealer/"
        imagePath="/images/wegmann.png"
        descriptionContent={wegmann.description}
        tasksContent={wegmann.tasks}
        tools="PHP, Javascript, Laravel, MySQL, Alpine.js, Bootstrap"
      />

      <ProjectSection
        title="Theater am Campus"
        url="https://theateramcampus.de"
        imagePath="/images/tac.png"
        descriptionContent={tac.description}
        tasksContent={tac.tasks}
        tools="Python, Django, Wagtail, PostgreSQL, React, Next.js, Bootstrap"
      />

      <ProjectSection
        title="WhatTheFiatFee"
        url="https://whatthefiatfee.vercel.app"
        imagePath={isDark ? '/images/wtff.png' : '/images/wtffL.png'}
        descriptionContent={whatthefiatfee.description}
        tasksContent={whatthefiatfee.tasks}
        tools="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, NextJS, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="Drivechain Exchange"
        url="https://drivechain.exchange"
        imagePath={
          isDark ? '/images/driveexchange.png' : '/images/driveexchangeL.png'
        }
        descriptionContent={drivechainexchange.description}
        tasksContent={drivechainexchange.tasks}
        tools="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, Next.js, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="WallStreetBets Mentions"
        url="https://wsb-mentions.vercel.app/"
        imagePath="/images/wsbmentions.png"
        descriptionContent={wsbmentions.description}
        tasksContent={wsbmentions.tasks}
        tools="Python, Pyppeteer, Tesseract OCR, React, Next.js, Recharts"
      />
    </Layout>
  )
}

export default Projects
