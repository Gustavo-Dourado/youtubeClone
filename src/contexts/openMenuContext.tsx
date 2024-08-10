import { useState, createContext} from "react";

interface menuContextInterface{
    isOpenMenu: boolean,
    setIsOpenMenu: (isOpenMenu: boolean) => void
}

interface menuStoreInterface{
    children: React.ReactNode
}

export const MenuContext = createContext<menuContextInterface>({} as menuContextInterface)

export const MenuStore = ({ children } : menuStoreInterface) => {

    const [isOpenMenu, setIsOpenMenu] = useState(true)

    return(
    
        <MenuContext.Provider value={{isOpenMenu, setIsOpenMenu}}>
            {children}
        </MenuContext.Provider>


    )
}



