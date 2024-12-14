import { getClassroom } from '@/services/ClassroomService'
import { createContext, useEffect, useState } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [active, setActive] = useState(false)
    const [classrooms, setClassrooms] = useState([])

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
        <MenuContext.Provider value={{active, setActive, classrooms}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext