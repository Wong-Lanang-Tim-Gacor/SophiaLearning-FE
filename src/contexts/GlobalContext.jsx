import { getClassroom } from '@/services/ClassroomService'
import { createContext, useContext, useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const {state} = useContext(AuthContext)
    const [classrooms, setClassrooms] = useState(null)

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const response = await getClassroom()
                setClassrooms(response.slice(0, 5))
            } catch (error) {
                console.error(error)
            }
        }

        if(state.auth) return fetchClassrooms()

    }, [])

    const resetClassrooms = () => {
        setClassrooms(null)
    }

    return (
        <GlobalContext.Provider value={{classrooms, resetClassrooms}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
