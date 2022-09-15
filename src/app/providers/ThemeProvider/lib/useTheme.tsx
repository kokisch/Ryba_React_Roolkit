import {CurrentTheme, LOCAL_STORAGE_THEME_KEY, ThemeVariants} from "../lib/ThemeContext";
import {useContext} from "react";
interface useThemeType {
    theme: ThemeVariants;
    toogle_theme: ()=>void;
}
export function useTheme ():useThemeType {
    const {theme, setTheme} =useContext(CurrentTheme);

    const toogle_theme=()=> {
        const newTheme:ThemeVariants=theme===ThemeVariants.LIGHT?ThemeVariants.DARK:ThemeVariants.LIGHT;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)
        setTheme(newTheme);
    }
    return {
        theme,
        toogle_theme
    }
}