import { createContext } from "react";
import { useState } from "react";

import producto1 from '../assets/producto_1.webp'
import producto2 from '../assets/producto_2.webp'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false)
    const [user, setUser] = useState(null)
    const [location, setLocation] = useState('')
    const [productos, setProductos] = useState([
        {
            id: 1,
            producto: 'Producto 1',
            total: 1990,
            img: producto1,
            count: 2
        },
        {
            id: 2,
            producto: 'Producto 2',
            total: 2990,
            img: producto2,
            count: 1
        }
    ])
    
    return (
        <AppContext.Provider value={{
            isMenuOpen,
            setIsMenuOpen,
            showCart,
            setShowCart,
            user,
            setUser,
            location,
            setLocation,
            productos,
            setProductos
        }}>
            {children}
        </AppContext.Provider>
    );
}
