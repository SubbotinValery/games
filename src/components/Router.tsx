import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { Sudoku } from "./Sudoku";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
