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

    const resetClassrooms = () => {
        setClassrooms(null);
    };


    return (
        <GlobalContext.Provider value={{classrooms, resetClassrooms}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
