export type Mode = "Light" | "Dark";
export type PrimaryColor =
  | "Primary"
  | "Purple"
  | "Info"
  | "Success"
  | "Warning"
  | "Error"
  | "Grey";
export type Language = "vi" | "en";

export interface ITheme {
  mode: Mode;
  primaryColor: PrimaryColor;
  i18nextLng: Language;
}

export const defaultThemeReducer: ITheme = {
  mode: "Light",
  primaryColor: "Primary",
  i18nextLng: "vi",
};
