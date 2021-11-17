import styled from "styled-components";

const Button = styled.button`
  padding: 5px 15px;
  font-size: 1rem;
  background: ${(props) => props.bg};
  border: ${(props) => props.borderColor} solid 3px;
  color: ${(props) => props.textColor};
  box-shadow: 2px 2px 0 0 ${(props) => props.shadowColor};
  cursor: pointer;
`;

export default Button;
