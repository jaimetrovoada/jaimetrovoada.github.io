import React from 'react'
import styled from 'styled-components'
import { Section } from 'components'

const StyledSection = styled(Section)`
display: grid;
  text-align: center;
  place-items: center;

  span {
    color: #ccc;
    font-size: 1.3em;
  }
  .avatar {
    margin: 0 auto;
    width: fit-content;
    img {
      width: 12rem;
      transition: 1s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`

const Home: React.FC = () => {
  return (
    <StyledSection>
      <div>hi</div>
    </StyledSection>
  )
}

export default Home
