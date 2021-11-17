import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = (props) => {
  const { tags = [] } = props;

  console.log({ tags });
  return (
    <>
      <Cardstyled>
        <img src={props.image} alt="" />
        <Content>
          <h2>{props.title}</h2>
          <Tags>
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}

            {/* {props.tags}.map(()=><Tag>{props.tags}</Tag>) */}
            {/* <Tag>{props.tags}</Tag> */}
            {/* <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>React</Tag> */}
          </Tags>
          <Bodydata>{props.info}</Bodydata>
          <Buttons>
            <Button
              bg="#1f1f1f"
              borderColor="#F26C4F"
              shadowColor="#F26C4F"
              textColor="#F1F7EE"
            >
              View Live Demo
            </Button>
            <Button
              bg="#1f1f1f"
              borderColor="#c2c2c2"
              shadowColor="#c2c2c2"
              textColor="#c2c2c2"
            >
              Github
            </Button>
          </Buttons>
        </Content>
      </Cardstyled>
    </>
  );
};

export default Card;

export const Cardstyled = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    object-fit: contain;
    width: 60%;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;

    box-shadow: 0 5px 10px 0 #000000;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 20px;
`;
export const Tag = styled.div`
  padding: 3px 7px;
  font-size: 0.8rem;
  font-weight: 300;
  background: transparent;
  border: 1px solid #f26c4f;
`;

export const Bodydata = styled.div`
  color: #c2c2c2;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
