import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footerstyled>
      <p>&copy; 2021 Mandeep ~ Created using React</p>
    </Footerstyled>
  );
};

export default Footer;

const Footerstyled = styled.footer`
  display: flex;
  background: #1f1f1f;
  padding: 20px;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;
