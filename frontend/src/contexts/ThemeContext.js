import { createContext, useState } from 'react';
export const ThemeContext = createContext();

/*
Theme is many to one relationship with user
Each user has a "default" appended to their themes array.
*/
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        backgroundColor: "transparent",
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontWeight: "",
        fontSize: "14px",
        borderColor: "transparent",
        borderStyle: "",
        borderWidth: ""
    });

    const changeTheme = (themeData) => {
        setTheme(themeData);
    };

    const defaultTheme = () => {
        setTheme (
            {
                backgroundColor: "transparent",
                color: "black",
                fontFamily: "Arial, sans-serif",
                fontWeight: "",
                fontSize: "14px",
                borderColor: "transparent",
                borderStyle: "",
                borderWidth: ""
            }
        )
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, defaultTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}