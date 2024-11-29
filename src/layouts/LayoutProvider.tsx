"use client";

import { store } from "@/lib/store";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
