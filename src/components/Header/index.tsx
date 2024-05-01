import React from "react";
import { BackIcon, Container, Title } from "./styles";

type Props = {
  title: string;
  color: string;
};

const Header = ({ title, color }: Props) => {
  return (
    <Container color={color}>
      <BackIcon />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
