import { createContext, useState } from 'react'

// 1. Crear el contexto
export const FilterContext = createContext()

// 2. Crear el provider, para proveer el contexto
export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 0,
    })

    return (
        <FilterContext.Provider value={{
            filter,
            setFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}