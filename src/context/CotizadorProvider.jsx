import { useState, createContext } from "react"

const CotizadorContext = createContext();

// eslint-disable-next-line react/prop-types
const CotizadorProvider = ({children}) => {

    const [modal, setModal] = useState(false);

    const cambiarState = ()=>{
        setModal(!modal)
    }

    return (
        <CotizadorContext.Provider
            value={{
               modal,
               cambiarState
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext