import React, { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <PopupContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </PopupContext.Provider>
    );
};
