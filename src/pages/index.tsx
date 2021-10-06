import {
  ContactPreview,
  Intro,
  Layout,
  ProjectsPreview,
  Tech,
} from '../components'
import React from 'react'

const Index = () => (
  <Layout>
    <Intro />

    <Tech />

    <ProjectsPreview />

    <ContactPreview />
  </Layout>
)

export default Index
