import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"
import {primaryBlue } from "../styles/styleConstants"


const AboutSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
`

const TextContainer = styled.div`
  max-width: 700px;
`

const AboutHeader = styled.h2`
  font-weight: 600;
  font-style: italic;
  color: ${primaryBlue};
  font-size: 36px;
  margin-bottom: 5px;
  margin-top: 0px;
`

const AboutSubheader = styled.h3`
  font-weight: 400;
  color: #000000;
  opacity: 0.5;
  margin-top: 5px;
`

const AboutText = styled.p`
  font-weight: 400;
  color: #000000;
`

const AboutImg = styled(Img)`
  margin: 0 auto 30px auto;
  max-width: 500px;
  
`


const AboutContainer = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/me.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutYaml {
        aboutParagraphs
        title
        subtitle
      }
    }
  `)
    return(
        <AboutSection className="row around-xs">
            <div className="col-xs-12 col-sm-5">
                <AboutImg fluid={data.file.childImageSharp.fluid} alt="Fiona in a sunflower field"></AboutImg>
            </div>
            <TextContainer className="col-xs-12 col-sm-6" >
                <AboutHeader dangerouslySetInnerHTML={{ __html: data.aboutYaml.title }} />
                <AboutSubheader dangerouslySetInnerHTML={{ __html: data.aboutYaml.subtitle }} />
                {data.aboutYaml.aboutParagraphs.map(paragraph => {
                    return <AboutText>{paragraph}</AboutText>
                })}
            </TextContainer>
  </AboutSection>
  )
}

export default AboutContainer