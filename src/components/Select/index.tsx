import React from "react";
import { Circle, Container, Option, Title } from "./styles";

export type Options = 0 | 1 | null;

type Props = {
  option: Options;
  setOption: React.Dispatch<React.SetStateAction<Options>>;
};

const Select = ({ option, setOption }: Props) => {
  return (
    <Container>
      <Option
        type="PRIMARY"
        selected={option === 1}
        onPress={() => setOption(1)}
      >
        <Circle type="PRIMARY" />
        <Title>Sim</Title>
      </Option>
      <Option
        type="SECONDARY"
        selected={option === 0}
        onPress={() => setOption(0)}
      >
        <Circle type="SECONDARY" />
        <Title>Não</Title>
      </Option>
    </Container>
  );
};

export default Select;
