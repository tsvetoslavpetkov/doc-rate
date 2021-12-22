import { createContext, useContext, useState } from "react";

export const NotifContext = createContext();

export const types = {
    error: 'danger',
    success: 'success'
}

const initialState = { show: false, message: '', type: types.error }

export function NotifProvider({ children }) {

    const [notification, setNotification] = useState(initialState)

    function addNotification(message, type = types.error) {
        setNotification({ show: true, message, type })

        setTimeout(() => {
            setNotification(initialState);
        }, 2500)
    }

    function hideNotification() {
        setNotification(initialState)
    }

    return (
        <NotifContext.Provider value={{ notification, addNotification, hideNotification }}>
            {children}
        </NotifContext.Provider>
    )
}

export function useNotifContext() {
    const state = useContext(NotifContext)
    return state
}