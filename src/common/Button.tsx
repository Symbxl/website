import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: React.ReactNode,
  width: string
  height: string
}

export default function Button({ children, width, height }: Props) {
  const navigate = useNavigate()

  const handleClick = () => navigate('/contact')

  const StyledButton = styled.button`
  width: 22px;
  height: ${height};
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: ${width};

  &:hover {
    background-color: #ececec;
  }
`
  return (
    <StyledButton onClick={handleClick}>{children}</StyledButton>
  )
}

