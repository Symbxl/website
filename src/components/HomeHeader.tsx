import { styled } from "styled-components"
import Button from "../common/Button"

export default function HomeHeader() {

  return (
    <Header>
      <Container>
        <Title>Ready To Build Your App?</Title>
        <Description>We are passionate about transforming ideas into innovative and user-friendly mobile and web applications</Description>
        <Button height="65px" width="250px">Book an appointment</Button>
      </Container>
      <Image src="#" />
    </Header>
  )
}

const Header = styled.header`
  min-height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
  width: 700px;
  margin: 1rem;
  @media (max-width: 750px) {
    margin-left: 3rem;
  }
`

const Title = styled.h1`
  color: black;
  font-size: 55px;
  font-weight: 200;
  margin-bottom: 1rem;
  font-family: sans-serif;
  @media (max-width: 750px) {
    font-size: 45px;
  }
`

const Description = styled.h2`
  color: black;
  font-size: 35px;
  font-weight: 200;
  margin-bottom: 3rem;
  font-family: sans-serif;
  @media (max-width: 750px) {
    font-size: 25px;
    margin-bottom: 3rem;
  }
`

const Image = styled.img`
  height: 300px;
  width: 500px;
  margin-right: 2rem;

  @media (max-width: 1300px) {
    display: none;
  }
`
