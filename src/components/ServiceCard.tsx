import styled from "styled-components"

interface Props {
  image: any,
  title: string,
  description: string
}

export default function ServiceCard({ image, title, description }: Props) {
  return (
    <Container>
      <TitleContainer>
        <ImageContainer>
          {image}
        </ImageContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  height: 350px;
  width: 650px;
  margin: 2rem;
  @media (max-width: 1500px) {
    height: 350px;
    width: 900px;
  }
  @media (max-width: 1000px) {
    width: auto;
    margin-top: 2rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  background-color: #57c7ff;
  border-radius: 50%;
  margin-right: 2rem;
  margin-top: 1rem;
`


const Title = styled.h1`
  font-size: 32px;
`

const Description = styled.h2`
    margin: 1rem 1rem 2rem 8rem;
    font-size: 24px;
    position: relative;
    bottom: 35px;
    font-weight: 400;
`
