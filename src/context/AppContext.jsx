import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false)
    const [user, setUser] = useState(null)
    const [location, setLocation] = useState('')
    
    return (
        <AppContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen,
            showCart,
            setShowCart,
            user,
            setUser,
            location,
            setLocation
        }}>
            {children}
        </AppContext.Provider>
    );
}
