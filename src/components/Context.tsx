import React, { createContext } from 'react';
import { IService } from '../interfaces';
import { myContainer } from '../inversify.config';
import { TYPES } from '../types';
import { Service } from './Service';

// const service = new Service();

export const ServiceProvider = ({children}:{children:React.ReactChild}) => {
  
  return (
    <Context.Provider value={myContainer.get(TYPES.Service)}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(myContainer.get<IService>(TYPES.Service))