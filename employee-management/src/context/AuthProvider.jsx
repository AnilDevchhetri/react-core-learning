import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    const { employees, admin } = getLocalStorage();
    //localStorage.clear();
    useEffect(() => {
        const { employees, admin } = getLocalStorage()

        if (!employees || !admin) {
            setLocalStorage();
            const refreshedData = getLocalStorage();
            setUserData(refreshedData);
        } else {
            setUserData({ employees, admin })
        }



    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider