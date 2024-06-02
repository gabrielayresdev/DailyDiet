import React from "react";
import { Circle, Container, Option, Title } from "./styles";

export type Options = boolean | null;

type Props = {
  option: Options;
  setOption: React.Dispatch<React.SetStateAction<Options>>;
};

const Select = ({ option, setOption }: Props) => {
  return (
    <Container>
      <Option
        type="PRIMARY"
        selected={option === true}
        onPress={() => setOption(true)}
      >
        <Circle type="PRIMARY" />
        <Title>Sim</Title>
      </Option>
      <Option
        type="SECONDARY"
        selected={option === false}
        onPress={() => setOption(false)}
      >
        <Circle type="SECONDARY" />
        <Title>Não</Title>
      </Option>
    </Container>
  );
};

export default Select;
