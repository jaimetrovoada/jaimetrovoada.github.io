import React from 'react'
import styled from 'styled-components'

interface SectionProps {
  children: any
}

const StyledSection = styled.div`
  height: 100vh;
      scroll-snap-align: start;
      overflow: scroll;

      &:nth-of-type(odd) {
        background-color: ${({ theme }) => theme.background.odd};
      }
      &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.background.even};
      }
`

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <StyledSection>{children}</StyledSection>
  )
}

export default Section
