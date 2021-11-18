import styled from "styled-components";

const Button = styled.a`
  padding: 5px 15px;
  font-size: 1rem;
  background: ${(props) => props.bg};
  border: ${(props) => props.borderColor} solid 3px;
  color: ${(props) => props.textColor};
  box-shadow: 2px 2px 0 0 ${(props) => props.shadowColor};
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.5s ease;

  :hover {
    transform: scale(0.98);
  }
`;

export default Button;