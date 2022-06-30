import { createContext, useState } from "react"

interface CurrentPage {
    currentPage: string
    setCurrentPage: (currentPage: string) => void
}

interface Children {
    children: JSX.Element | JSX.Element[]
}

export const CurrentPageContext = createContext<CurrentPage>({ currentPage: 'home', setCurrentPage: () => { } })

export const CurrentPageProvider = ({ children }: Children) => {
    const [currentPage, setCurrentPage] = useState('home')

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </CurrentPageContext.Provider>
    )
}