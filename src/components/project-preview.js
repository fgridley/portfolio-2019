// import { Link } from "gatsby"
import React from "react"
import Img from 'gatsby-image';
import styled from "styled-components"
import { primaryBlue, lightBlue } from "../styles/styleConstants"

const ProjectsAllContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  // margin-top: 60px;
`

const Number = styled.h2`
  font-weight: 600;
  font-style: italic;
  color: ${primaryBlue};
  font-size: 36px;
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 5px;
  margin-top: 0px;
`

const Project = styled.div`
  // width: 100%;
`

const TextContainer = styled.div`
  max-width: 700px;
`

const Name = styled.h2`
  font-weight: 400;
  font-size: 24px;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 0px;
`

const Date = styled.h3`
  font-weight: 400;
  opacity: 0.5;
  margin-top: 5px;
`

const Separator = styled.div`
  border: 2px solid ${lightBlue};
  margin: 50px 0px;
`

const Challenge = styled.p`
  display: inline-block;
`

const Solution = styled.p`
  display: inline-block;
`

const PreviewImg = styled(Img)`
  max-width: 500px;
  margin: 0px auto 20px auto;
  box-shadow: 0px 0px 15px #00000033;
`

const ProjectHeader = styled.h1`
  text-align: center;
  margin: 20px 0px 40px 0px;
  font-size: 36px;
`

const ProjectLink = styled.a`

`

const ImageContainer = styled.div`
  
`

const ProjectPreview = ({data}) => {
  return(
  <ProjectsAllContainer>
    <ProjectHeader> Selected Work </ProjectHeader>
      {data.map((item) => (
        <Project key={item.name} className="row around-xs">
          <ImageContainer className="col-xs-12 col-sm-5">
            <PreviewImg fluid={item.image.childImageSharp.fluid} />
          </ImageContainer>
          <TextContainer className="col-xs-12 col-sm-6 first-sm">
            <Number>{item.number}</Number>
            <Name>{item.name}</Name>
            <Date>{item.date}</Date>
            <Challenge>
              <bold>The challenge: </bold>
              {item.challenge}
            </Challenge>
            <Solution>
              <bold>The solution: </bold>
              {item.solution}
            </Solution>
            <ProjectLink href={item.link}>{item.link_text}</ProjectLink>
          </TextContainer>
          <Separator className="col-xs-12 col-sm-11" />
        </Project>
      ))}
  </ProjectsAllContainer>
  )
}

export default ProjectPreview
