import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'dark',
    darkTheme: () => { },
    lightTheme: () => { }
})
// we can pass default values and method in object in the context  
export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}