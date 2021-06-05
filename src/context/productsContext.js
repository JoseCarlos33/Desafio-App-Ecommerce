import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export default function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()

    useEffect(() => {
        let value = 0
        cart.map((item) => {
            value = value + item.price
        })

        setTotalValue(value)
    },[cart])

    function add (item) {
        const newCart = cart
        if(item.id!==cart.keys){
            newCart.push(item)
        }
        
        setCart([...newCart])
    }

    function removeAll (item){
        setCart([])
    }

    const store = {
        add,
        cart,
        totalValue,
        removeAll
    }

    return(
        <CartContext.Provider value={store}> 
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue,
        removeAll
    } = context

    return{
        cart,
        add,
        totalValue,
        removeAll
    }
}