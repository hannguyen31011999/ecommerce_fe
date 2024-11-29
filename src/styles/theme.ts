import { createTheme, keyframes } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
  interface ButtonPropsVariantOverrides {
    default: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    desktop: true;
    laptop: true;
    tablet: true;
  }
}

export const defaultColor = {
  black: "#00000",
  white: "#fffff",
};

export const primary = {
  100: "#0aab74",
  200: "#f5faf8",
  300: "#c5f1db",
  400: "#a4bec0",
  500: "#f7f8f9",
};

export const purple = {
  100: "#F9FAFB",
  200: "#8E31FE",
  300: "#F9F9F9",
  400: "#FAFAFC",
  500: "#FBFAF8",
};

export const info = {
  100: "#F9FAFB",
  200: "#00B8D9",
  300: "#00B7D8",
  400: "#F1F8FA",
};

export const success = {
  100: "#F9FAFB",
  200: "#22C55E",
  300: "#F5F9F8",
  400: "#1FC45C",
  500: "#FCFBFD",
};

export const warning = {
  100: "#FEAB00",
  200: "#F9F8F7",
  300: "#6A4214",
  400: "#F1CD77",
  500: "#B76E00",
};

export const error = {
  100: "#F9F9FA",
  200: "#FE5630",
  300: "#F6A487",
  400: "#90171B",
  500: "#F9E4DB",
};

export const grey = {
  100: "#F2F2F2",
  200: "#E0E0E0",
  300: "#C8C8C8",
  400: "#969696",
  500: "#646464",
  600: "#000000",
};

export const shadow = {};

export const animation = {
  spin: keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
};

export const backgroundButton = {
  actionHover: "rgba(145 158 171 / 0.08)",
};

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {},
      variants: [
        {
          props: {
            variant: "default",
          },
          style: {
            minHeight: "auto",
            minWidth: "auto",
            padding: "0px",
          },
        },
        {
          props: {
            size: "xs",
          },
          style: {
            height: "32px",
            width: "32px",
          },
        },
        {
          props: {
            size: "sm",
          },
          style: {
            height: "36px",
            width: "36px",
          },
        },
        {
          props: {
            size: "md",
          },
          style: {
            height: "40px",
            width: "40px",
          },
        },
        {
          props: {
            size: "lg",
          },
          style: {
            height: "44px",
            width: "44px",
          },
        },
        {
          props: {
            size: "xl",
          },
          style: {
            height: "48px",
            width: "48px",
          },
        },
        {
          props: {
            size: "xxl",
          },
          style: {
            height: "52px",
            width: "52px",
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 375,
      xl: 1200,
      lg: 992,
      sm: 576,
      md: 767,
      desktop: 1440,
      laptop: 1024,
      tablet: 920,
    },
  },
});
