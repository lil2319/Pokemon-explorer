import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';
import lightMode from '../assets/lightMode.png';
import darkMode from '../assets/darkMode.png';
import home from '../assets/home.png'

export default function Layout() {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <div>
            <header className="header">
                <Link to="/">
                    <img src={home} alt="Home" className="home" />
                </Link>
                <button onClick={toggle} className="theme-toggle">
                    <img
                        src={theme === 'light' ? darkMode : lightMode}
                        alt="Toggle theme"
                        width={24}
                        height={24}
                    />
                </button>
            </header>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
