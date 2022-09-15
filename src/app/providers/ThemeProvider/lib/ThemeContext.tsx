import React from "react";
export enum ThemeVariants  {
    "DARK" = "dark",
    "LIGHT" = "light"
};
export interface ContextThemeType {
    theme?: ThemeVariants;
    setTheme?: (theme: ThemeVariants)=>void;
}
export const LOCAL_STORAGE_THEME_KEY="theme";
export const CurrentTheme=React.createContext<ContextThemeType>({});
