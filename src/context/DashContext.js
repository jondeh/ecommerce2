import React, { useState, createContext } from 'react'

export const DashContext = createContext(null)
export const DashProvider = ({ children }) => {
    const [moduleCounter, setModuleCounter] = useState(0)


    return (
    <DashContext.Provider 
    value={{
        moduleCounter, setModuleCounter
    }}>
        {children}
    </DashContext.Provider>
    )
}