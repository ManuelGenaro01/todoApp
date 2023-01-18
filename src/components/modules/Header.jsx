import { useEffect, useState } from "react";
import Moon from "../images/Moon";
import Sun from "../images/Sun";

const initialStateDark = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDark);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-md">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.4rem] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
