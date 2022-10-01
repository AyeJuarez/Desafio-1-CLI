import React, { useState, createContext } from 'react';

export const ItemsContext = createContext();

const initialState = () => [
    {
        id: 1,
        title: 'Campera Desmontable Dama',
        price: 120000,
        stock: 10,
        
    },
];

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([initialState]);

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {children}
        </ItemsContext.Provider>
    );
};
