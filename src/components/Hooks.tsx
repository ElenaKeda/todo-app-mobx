import { Context } from './Context';
import { useContext } from 'react'

export const useService = () => {
  return useContext(Context);
}