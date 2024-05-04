import React from "react";
import { Container } from "./styles";
import Percent from "@components/Percent";

const Home = () => {
  return (
    <Container>
      <Percent oldValue={65} newValue={75} />
    </Container>
  );
};

export default Home;
