import React, { createContext, useState } from "react";


export const adddata = createContext("");
export const updateData = createContext("");
export const deldata = createContext("");

const ContextProvider = ({ children }) => {
    const [udata, setUdata] = useState("");
    const [updata, setUPdata] = useState("");
    const [dltdata, setDLTdata] = useState("");

    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <updateData.Provider value={{ updata, setUPdata }}>
                <deldata.Provider value={{ dltdata, setDLTdata }}>
                    {children}
                </deldata.Provider>
            </updateData.Provider>
        </adddata.Provider>
    )
}

export default ContextProvider;