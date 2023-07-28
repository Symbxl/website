import Form from "../components/Form"
import styled from "styled-components"

export default function DisplayForm() {

  return (
    <Container>
      <Form />
      <Image />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 3rem;
`

const Image = styled.img`
  height: 500px;
  width: 500px;
  margin-right: 2rem;

  @media (max-width: 1300px) {
    display: none;
  }
`
