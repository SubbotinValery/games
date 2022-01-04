import React from "react";
import { Container } from "../UI/styled/Container";
import { Header } from "../UI/containers/Header";
import { GamesBlock } from "./Games";
const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <GamesBlock />
      </Container>
    </>
  );
};

export default Dashboard;
