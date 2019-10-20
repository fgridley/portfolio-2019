import React from "react"
import Github from "../data/images/github"
import LinkedIn from "../data/images/linkedin"
import Email from "../data/images/email"
import styled from "styled-components"

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
`

const LinkContainer = styled.div`
  width: 100%;
  padding-right: 1rem;
`
const Icon = styled.div`
  margin-left: 30px;
`

const Footer = () => {
  return(
  <FooterContainer>
    <LinkContainer className="row end-xs">
      <Icon>
        <Github />
      </Icon>
      <Icon>
        <LinkedIn />
      </Icon>
      <Icon>
        <Email />
      </Icon>
    </LinkContainer>
  </FooterContainer>
  )
}

export default Footer
