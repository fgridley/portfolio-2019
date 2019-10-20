import { useStaticQuery, graphql, Link  } from "gatsby"
import React from "react"
import HeaderImg from "../data/images/headerImg"
import styled from "styled-components"

const HeaderContainer = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  background: #ffffff;
  z-index: 2000;
  width: 100%;
  top: 0;
  box-shadow: 0px 10px 10px #00000009;
`
const NavContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.0875rem;
`
const LogoContainer = styled.div`
  min-width: 150px;
`
const LinkUL = styled.ul`
  list-style: none;
  margin: 0;
  float: right;
`
const LinkContainer = styled.div`
  height: 100%;
`

const ListLink = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
`


const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: {eq: "resume"}) {
        publicURL
      }
    }
  `)
  return(
  <HeaderContainer>
    <NavContainer className="row">
      <LogoContainer className="col-xs-5 col-sm-4 col-md-3 col-lg-3">
        <HeaderImg />
      </LogoContainer>
      <div className="col-xs">
        <LinkContainer className="row middle-xs end-xs">
          <LinkUL className="col-xs-12">
            <ListLink >
              <Link to="/">work</Link> 
            </ListLink>
            <ListLink >
              <Link to="/about/">about</Link> 
            </ListLink>
            <ListLink >
              <a href={data.file.publicURL}>resume</a> 
            </ListLink>
          </LinkUL>
        </LinkContainer>
      </div>
    </NavContainer>
  </HeaderContainer>
  )
}

export default Header
