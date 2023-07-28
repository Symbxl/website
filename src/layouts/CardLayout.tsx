import styled from "styled-components"
import Button from "../common/Button"

interface Props {
  title: string
  children: React.ReactNode,
}

export default function CardLayout({ title, children }: Props) {
  return (
    <Section>
      <TitleContainer>
        <Title>{title}</Title>
        <Button height="70px" width="200px">Get Started</Button>
      </TitleContainer>
      <Container>
        {children}
      </Container>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 2rem;
`

const TitleContainer = styled.div`
  display: flex;
  height: 125px;
  align-items: center;
  justify-content: space-between;
  margin: 0 4rem;
  position: relative;
  top: 25px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    height: auto;
    margin-bottom: 2rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 0rem 1rem;
`


const Title = styled.h1`
  font-size: 40px;
`
