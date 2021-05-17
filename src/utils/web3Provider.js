import React, { useReducer, useContext, createContext } from 'react'

const StoreContext = createContext()
const initialState = {
    message: '',
    address: null,
    balance: 0,
}

const reducer = (action, state) => {
    switch (action.type) {
        case 'NEW-ADDRESS':
            return {
                ...state,
                address: action.newAddress,
                message: action.message,
            }
        case 'SET-BALANCE':
            return {
                ...state,
                balance: action.newBalance,
            }
        default:
            throw new Error(`Unknown action.type ${action.type}`)
    }
}

export const Web3Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider values={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export const useWeb3 = () => useContext(StoreContext)