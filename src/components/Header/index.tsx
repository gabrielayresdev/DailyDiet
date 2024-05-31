import React from "react";
import { BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  color: string;
};

const Header = ({ title, color }: Props) => {
  const navigation = useNavigation();
  return (
    <Container color={color}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
