import React, {FC, useMemo, useState} from 'react';
import {ContextThemeType, CurrentTheme, LOCAL_STORAGE_THEME_KEY, ThemeVariants} from "../lib/ThemeContext";
type ThemeProviderType={
    children: React.ReactNode
}
const ThemeProvider:FC<ThemeProviderType> = ({children}) => {
    const DefaultTheme:ThemeVariants=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)  as ThemeVariants|| ThemeVariants.LIGHT;
    const [Theme, setTheme]=useState<ThemeVariants>(DefaultTheme);

    const DefaultProps:ContextThemeType = useMemo(()=> {
        return {
            theme: Theme,
            setTheme: setTheme
        }
    } , [Theme])

    return (
        <CurrentTheme.Provider value={DefaultProps}>
            {children}
        </CurrentTheme.Provider>


    );
};

export default ThemeProvider;