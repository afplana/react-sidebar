import React, { useState, useContext, FC, createContext } from 'react'

export type ContextState = {
    isSidebarOpen?: boolean
    isModalOpen?: boolean
    openSidebar?: () => void
    closeSidebar?: () => void
    openModal?: () => void
    closeModal?: () => void
}

const AppContext = createContext<ContextState>({
    isSidebarOpen: false,
    isModalOpen: false,
    openSidebar: () => { },
    closeSidebar: () => { },
    openModal: () => { },
    closeModal: () => { }
})

const AppProvider: FC = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const state: ContextState = { isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }

    return <AppContext.Provider value={state}>
        {children}
    </AppContext.Provider>
}

export function useGlobalContext(): ContextState {
    return useContext(AppContext)
}

export { AppContext, AppProvider }