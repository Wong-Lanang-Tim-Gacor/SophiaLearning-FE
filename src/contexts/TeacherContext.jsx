import {createContext, useState} from "react";

const TeacherContext = createContext({
    isTeacher: false,
});

export const TeacherProvider = ({children}) => {
    const [isTeacher, setIsTeacher] = useState({
        isTeacher: false,
    });
    return (
        <TeacherContext.Provider value={{ isTeacher, setIsTeacher }}>
            {children}
        </TeacherContext.Provider>
    )
}

export default TeacherContext;