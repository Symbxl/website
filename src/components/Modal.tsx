import styled from "styled-components"

interface Props {
  isOpen: any,
  handleClose: any,
  children: any
}

export default function Modal({ isOpen, handleClose, children }: Props) {
  return (
    <>
      {isOpen && (
        <Background>
          <StyleModal>
            <Button onClick={handleClose}>x</Button>
            {children}
          </StyleModal>
        </Background>
      )}
    </>
  )
}

const Background = styled.div`
  background-color: white;
  height: 150vh;
  width: 100vw;
  position: absolute;
  right: 0px;
  top: 90px;
  z-index: 1;

`

const StyleModal = styled.div`
  display: flex;
  flex-direction: column;
;

`
const Button = styled.button`
  position: relative;
  bottom: 85px;
  align-self: end;
  margin: 1.25rem;
  width: 50px;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #dbdbdb;
  }
`