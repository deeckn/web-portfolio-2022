import { createContext, useState } from "react"

interface DarkMode {
    darkMode: boolean
    toggleDarkMode: () => void
}

interface Children {
    children: JSX.Element | JSX.Element[]
}

export const DarkModeContext = createContext<DarkMode>({ darkMode: false, toggleDarkMode: () => null })

export const DarkModeProvider = ({ children }: Children) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}