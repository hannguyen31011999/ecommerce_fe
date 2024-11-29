import { createAction } from "@reduxjs/toolkit";
import { Mode } from "./types";

export const handleChangeTheme = createAction<Mode, "theme/change-theme">(
  "theme/change-theme"
);
