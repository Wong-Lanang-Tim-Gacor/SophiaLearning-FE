import { createContext, useState } from "react";

const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [active, setActive] = useState(false)
    return (
        <MenuContext.Provider value={{active, setActive}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext;