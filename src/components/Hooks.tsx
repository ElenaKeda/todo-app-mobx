import { Context } from './Context';
import { useContext, useEffect } from 'react'
import axios from 'axios';

export const useService = () => {
  return useContext(Context);
}

export const useInterval = (func:() => void, time:number) => {
  return useEffect(()=> {
    const interval = setInterval(func, time);

    return () => clearInterval(interval);
  },[])
}