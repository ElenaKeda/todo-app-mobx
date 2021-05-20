import React, { createContext } from 'react';
import { Service } from './Service';

const service = new Service();

export const ServiceProvider = ({children}:{children:React.ReactChild}) => {
  
  return (
    <Context.Provider value={service}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(service)