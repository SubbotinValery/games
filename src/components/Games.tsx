import React from "react";
import { useTranslation } from "react-i18next";

import { GamesContainer } from "../UI/styled/GamesContainer";
import { GameItem } from "../UI/styled/GameItem";

export const GamesBlock = () => {
  const { t } = useTranslation("Dashboard");
  return (
    <GamesContainer>
      <h1>{t("GamesBlock-title")}</h1>

      <div>
        <GameItem>
          <span>SUDOKU</span>
        </GameItem>
      </div>
    </GamesContainer>
  );
};
