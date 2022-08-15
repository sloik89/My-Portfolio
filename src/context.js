import React,{useState, useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [darkMode,setDarkMode] = useState(false)
    const [lang,setLang] = useState('eng')
      const handleSwitcher = () =>{
        if(lang ==="eng"){
            setLang('pl')
        } else{
            setLang('eng')
        }
        console.log(lang);
    }
    const handleDarkMode = () =>{
    setDarkMode(!darkMode)
      console.log(darkMode)
    }
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        darkMode,
        handleDarkMode,
        setDarkMode,
        lang,
        handleSwitcher

    }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext,AppProvider}