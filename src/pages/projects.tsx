import { Heading, useColorModeValue } from '@chakra-ui/react'
import { Layout, ProjectSection } from '../components'
import { useLang } from '../utils'
import sideShiftLightImg from '../../public/images/sideshift_light.png'
import sideShiftDarkImg from '../../public/images/sideshift_dark.png'
import haroImg from '../../public/images/haro.png'
import sunmarinImg from '../../public/images/sunmarin.png'
import wegmannImg from '../../public/images/wegmann.png'
import tacImg from '../../public/images/tac.png'
import rw11Img from '../../public/images/rw11.png'
import wtffLImg from '../../public/images/wtffL.png'
import wtffImg from '../../public/images/wtff.png'
import driveexchangeLImg from '../../public/images/driveexchangeL.png'
import driveexchangeImg from '../../public/images/driveexchange.png'
import wsbmentionsImg from '../../public/images/wsbmentions.png'
import fromaboveImg from '../../public/images/from_above.png'
import datacakeImg from '../../public/images/datacake.png'

// TODO add Jiga: improves supply chain (=Lieferketten) automation

const projectsContent = {
  en: {
    heading: 'Projects',
    datacake: {
      description:
        'Datacake is a multi-purpose, low-code IoT platform that requires no programming skills and minimal time to create custom IoT applications',
      tasks:
        'Creating, improving and maintaining UI components, guiding overall development strategy through design, prototyping and market research',
    },
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
        'E-commerce site for Sunmarin by Riedl, one of the leading manufacturers of swimwear & beachwear in Europe.',
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
      description:
        'RW11 is a group of performance artists. The site includes an event schedule, contact form and infos about the team',
      tasks:
        'Communicating with client, minimizing hosting costs, adding a CMS, integrating Google Maps',
    },
    drivechainexchange: {
      description:
        'Hobby project to test new releases of Bitcoin beta software. It enables transfers between different blockchains (Exchange) and tracks blockchain data (CoinNews).',
      tasks:
        "full-stack development, setting up bitcoin nodes, deployment on a VPS and Vercel's CDN (Frontend)",
    },
    whatthefiatfee: {
      description:
        'Converts the fee estimates from WhatTheFee.io to different currencies, adds a transaction size calculator and tracks historical data.',
      tasks:
        "full-stack development, deployment on Heroku (Backend) and Vercel's CDN (Frontend)",
    },
    fromabove: {
      description:
        'Entry for the Global Gam Jam 2017, developed within 48 hours. A short game about holding your breath and keeping your sanity. In homage to Bloodborne and Ecco the Dolphin, players must strike a balance between surfacing for air but witnessing the human chaos, and surviving underwater with limited oxygen but in a serene landscape.',
      tasks: 'Game design, programming',
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
        "full-stack development, deployment on Heroku (Backend) and Vercel's CDN (Frontend)",
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
    datacake: {
      description:
        'Datacake ist eine vielseitige Low-code-Plattform, mit der sich ohne Programmierkenntnisse und mit minimalem Zeitaufwand IoT-Anwendungen erstellen lassen.',
      tasks:
        'Erstellen, pflegen und verbessern der UI-Komponenten, leiten der Entwicklungs-Strategie durch Design, Prototyping und Marktforschung',
    },
    sideshift: {
      description:
        'SideShift.ai ist eine stark automatisierte Tauschbörse für digitale Währungen, die als Brücke zwischen diversen Blockchains dient.',
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
        'Theater am Campus fasst Theaterprojekte der Uni Bayreuth zusammen. Mit Veranstaltungskalendar und Funktionen zur Ticket-Reservierung.',
      tasks:
        'Projektplanung mit streng limitiertem Budget, Hosting-Kosten minimieren, Full-stack-Entwicklung, CMS für Admins, automatischer Mailversand',
    },
    rw11: {
      description:
        'RW11 ist eine Theatergruppe aus Bayreuth. Die Seite listet Veranstaltungen, bietet ein Kontaktformular and informiert über das Team.',
      tasks:
        'Projektplanung mit streng limitiertem Budget, Hosting-Kosten minimieren, Full-stack-Entwicklung, CMS für Admins, Google-Maps-Integration',
    },
    drivechainexchange: {
      description:
        'Hobby-Projekt zum Betatesten von Bitcoin-Software. Ermöglicht den Transfer zwischen Blockchains (Exchange) und verfolgt Blockchain-Daten (CoinNews).',
      tasks:
        'Full-stack-Entwicklung, Einrichten von Bitcoin-Nodes, Hosten mit VPS und Vercels CDN (Frontend)',
    },
    whatthefiatfee: {
      description:
        'Rechnet die Gebühren-Prognosen von WhatTheFee.io in verschiedene Währungen um, hilft bei der Berechnung von Transaktionsgrößen und visualisiert vergangene Transaktionsgebühren.',
      tasks:
        'full-stack development, Hosting mit Heroku (Backend) and Vercels CDN (Frontend)',
    },
    fromabove: {
      description:
        'Beitrag zum Global Gam Jam 2017, entwickelt in 48 Stunden. Eine kleine Hommage an Bloodborne und Ecco the Dolphin. Als Delphin müssen Spieler ein Äqui­li­b­ri­um finden: Unterwasser ist es friedlich, aber Sauerstoff ist knapp, doch zum Luftholen auftauchen und das menschliche Chaos zu sehen, zehrt an den Nerven.',
      tasks: 'Spieldesign, Programmierung',
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
        'full-stack development, Hosting mit Heroku (Backend) and Vercels CDN (Frontend)',
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
  const lang = useLang()
  const {
    heading,
    sideshift,
    haro,
    sunmarin,
    wegmann,
    tac,
    rw11,
    whatthefiatfee,
    drivechainexchange,
    wsbmentions,
    fromabove,
    datacake,
  } = projectsContent[lang]

  return (
    <Layout title={`${heading} | Felix Ha`}>
      <Heading as="h1" size="lg" mb="10">
        {heading}
      </Heading>

      <ProjectSection
        title="Datacake.co"
        url="https://datacake.co/"
        imagePath={datacakeImg}
        descriptionContent={datacake.description}
        tasksContent={datacake.tasks}
        tools="Typescript, React, GraphQL, Tailwind CSS, Storybook"
      />

      <ProjectSection
        title="SideShift.ai"
        url="https://sideshift.ai/a/discount"
        imagePath={useColorModeValue(sideShiftLightImg, sideShiftDarkImg)}
        descriptionContent={sideshift.description}
        tasksContent={sideshift.tasks}
        tools="Typescript, React, PostgreSQL, GraphQL, Redis, Storybook, Jest"
      />

      <ProjectSection
        title="Haro.com"
        url="https://haro.com"
        imagePath={haroImg}
        descriptionContent={haro.description}
        tasksContent={haro.tasks}
        tools="PHP, Javascript, Laravel, Vue.js, MySQL, Redis, Bootstrap, SCSS"
      />

      <ProjectSection
        title="Sunmarin.de"
        url="https://sunmarin.de"
        imagePath={sunmarinImg}
        descriptionContent={sunmarin.description}
        tasksContent={sunmarin.tasks}
        tools="PHP, Javascript, HTML, SCSS, Bootstrap"
      />

      <ProjectSection
        title="Wegmann Automotive - Store Locator"
        url="https://www.wegmann-automotive.com/us/dealer/"
        imagePath={wegmannImg}
        descriptionContent={wegmann.description}
        tasksContent={wegmann.tasks}
        tools="PHP, Javascript, Laravel, MySQL, Alpine.js, Bootstrap"
      />

      <ProjectSection
        title="Theater am Campus"
        url="https://theateramcampus.de"
        imagePath={tacImg}
        descriptionContent={tac.description}
        tasksContent={tac.tasks}
        tools="Python, Django, Wagtail, PostgreSQL, React, Next.js, Bootstrap"
      />

      <ProjectSection
        title="RW11"
        url="https://rw-11.herokuapp.com"
        imagePath={rw11Img}
        descriptionContent={rw11.description}
        tasksContent={rw11.tasks}
        tools="Python, Django, PostgreSQL, Javascript, Sass, Bootstrap"
      />

      <ProjectSection
        title="WhatTheFiatFee"
        url="https://whatthefiatfee.vercel.app"
        imagePath={useColorModeValue(wtffLImg, wtffImg)}
        descriptionContent={whatthefiatfee.description}
        tasksContent={whatthefiatfee.tasks}
        tools="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, NextJS, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="Drivechain Exchange"
        url="https://drivechain.exchange"
        imagePath={useColorModeValue(driveexchangeLImg, driveexchangeImg)}
        descriptionContent={drivechainexchange.description}
        tasksContent={drivechainexchange.tasks}
        tools="Typescript, NodeJS, Express, Apollo, GraphQL, PostgreSQL, React, Next.js, Bitcoin, Chakra UI"
      />

      <ProjectSection
        title="WallStreetBets Mentions"
        url="https://wsb-mentions.vercel.app/"
        imagePath={wsbmentionsImg}
        descriptionContent={wsbmentions.description}
        tasksContent={wsbmentions.tasks}
        tools="Python, Pyppeteer, Tesseract OCR, React, Next.js, Recharts"
      />

      <ProjectSection
        title="From Above"
        url="http://from-above.monster"
        imagePath={fromaboveImg}
        descriptionContent={fromabove.description}
        tasksContent={fromabove.tasks}
        tools="GameMaker Studio"
      />
    </Layout>
  )
}

export default Projects
