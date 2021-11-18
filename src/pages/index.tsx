import {
  ContactPreview,
  Intro,
  Layout,
  ProjectsPreview,
  Tech,
  Testimonials,
} from '../components'

const Index = () => (
  <Layout title="Felix Ha">
    <Intro />

    <Testimonials />

    <Tech />

    <ProjectsPreview />

    <ContactPreview />
  </Layout>
)

export default Index
