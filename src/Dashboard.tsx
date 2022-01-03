import React from "react";
import { Container } from "./UI/Container";
import { Header } from "./UI/Header";
import { ThemeBar } from "./UI/ThemeBar";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <ThemeBar />
      </Header>
    </Container>
  );
};

export default Dashboard;
