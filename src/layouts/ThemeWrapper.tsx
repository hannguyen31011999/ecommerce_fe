"use client";

import { Mode } from "@/context/admin/theme/types";
import { useAppSelector } from "@/lib/hooks";
import { defaultColor } from "@/styles/theme";
import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import HeaderLayout from "./admin/HeaderLayout";

const modeDark: Mode = "Dark";
const modeLight: Mode = "Light";

export interface styleMode {
  [modeDark]?: SxProps;
  [modeLight]?: SxProps;
  sx?: SxProps;
}

const sx: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const style: styleMode = {
  Dark: {
    background: defaultColor.black,
    ...sx,
  },
  Light: {
    background: defaultColor.white,
    ...sx,
  },
};

export default function ThemeWrapper<T extends object>(LayoutComponent: FC<T>) {
  const NewComponent = (props: T) => {
    const { mode } = useAppSelector((state) => state.theme);
    return (
      <Box sx={{ ...style[mode] }}>
        <HeaderLayout />
        <LayoutComponent {...props} />
      </Box>
    );
  };
  return NewComponent;
}
