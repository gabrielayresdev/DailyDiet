import React from "react";
import {
  Bold,
  ConclusionHeader,
  Container,
  Illustration,
  Subtitle,
  Title,
} from "./style";
import imgSuccess from "@assets/illustrations/Illustration-success.png";
import imgFailure from "@assets/illustrations/Illustration-fail.png";
import Button from "@components/Button";
import { View } from "react-native";

const Conclusion = () => {
  const type: "SUCCESS" | "FAILURE" = "SUCCESS";

  return (
    <Container>
      <ConclusionHeader>
        <Title type={type}>
          {type === "SUCCESS" ? "Continue assim!" : "Que pena!"}
        </Title>
        {type === "SUCCESS" ? (
          <Subtitle>
            Você continua <Bold>dentro da dieta</Bold>. Muito bem!
          </Subtitle>
        ) : (
          <Subtitle>
            Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se
            esforçando e não desista!
          </Subtitle>
        )}
      </ConclusionHeader>

      {type === "SUCCESS" ? (
        <Illustration source={imgSuccess} />
      ) : (
        <Illustration source={imgFailure} />
      )}
      <Button title="Ir para a página inicial" fill={false} />
    </Container>
  );
};

export default Conclusion;
