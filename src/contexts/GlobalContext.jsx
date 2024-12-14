import { getClassroom } from '@/services/ClassroomService'
import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [classrooms, setClassrooms] = useState(null)

    useEffect(() => {
        const getDataClassroom = async () => {
            return await getClassroom()
                .then(response => {
                    setClassrooms(response.slice(0, 5))
                })
        }
        getDataClassroom().catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{classrooms}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
