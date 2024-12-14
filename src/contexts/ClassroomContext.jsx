import { createContext, useContext } from 'react'

const ClassroomContext = createContext()

export const useClassroom = () => useContext(ClassroomContext)

export default ClassroomContext
