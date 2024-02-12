import { createContext } from "react"

export const userData = {
    name: 'Misha',
    age: 27,
}

export const ArrContext = createContext(userData)
