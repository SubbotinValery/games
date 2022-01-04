import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GamesContainer } from "../styled/GamesContainer";
import { GameItem } from "../styled/GameItem";

interface GameItemProps {
  title: string;
  path: string;
}

const games: GameItemProps[] = [{ title: "Sudoku", path: "/sudoku" }];

export const GamesBlock = () => {
  const { t } = useTranslation("Dashboard");
  return (
    <GamesContainer>
      <h1>{t("GamesBlock-title")}</h1>
      <div>
        {games.map((gameItem) => (
          <Link key={gameItem.title} to={gameItem.path}>
            <GameItem>{gameItem.title}</GameItem>
          </Link>
        ))}
      </div>
    </GamesContainer>
  );
};
