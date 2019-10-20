import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from '../components/project-preview'
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ProjectPreview data={data.allWorkYaml.edges.map(e => e.node)} />
  </Layout>
)

export const query = graphql`
  query {
    allWorkYaml {
      edges {
        node {
          name
          number
          date
          link
          link_text
          challenge
          solution
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage