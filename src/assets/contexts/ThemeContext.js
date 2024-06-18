import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    function ToggleTheme (newTheme) {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    useContext(ThemeContext);
}