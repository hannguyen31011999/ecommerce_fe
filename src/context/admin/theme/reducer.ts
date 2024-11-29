import { createReducer } from "@reduxjs/toolkit";
import { defaultThemeReducer } from "./types";
import { handleChangeTheme } from "./action";

export const themeReducer = createReducer(defaultThemeReducer, (builder) =>
  builder.addCase(handleChangeTheme, (state, action) => {
    state.mode = action.payload;
  })
);
