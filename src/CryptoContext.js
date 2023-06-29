import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {useContext } from "react";

const Crypto = createContext()

const CryptoContext = ({children}) => {

    const [currency, setCurrency] = useState("INR");
     const [symbol, setsymbol] = useState("₹");

     useEffect(() => {
        if(currency === "INR") setsymbol("₹");
        else if(currency ==="USD") setsymbol("$")
     }, [currency]);
  return <Crypto.Provider value ={{currency,symbol,setCurrency }}> {children}</Crypto.Provider>
      
};

export default CryptoContext;

export const CryptoState = () => {
   return useContext(Crypto)
};
