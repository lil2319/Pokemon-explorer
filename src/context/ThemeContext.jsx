import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggle: () => { } });

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggle = () =>
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    React.useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
