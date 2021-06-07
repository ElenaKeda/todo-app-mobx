import React from 'react';
import { ITodo, IStorageService } from '../interfaces';
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export class StorageService implements IStorageService {

  getStorage(todoKey:string) {
    const todoData = localStorage.getItem(todoKey);
    if (todoData) {
      return JSON.parse(todoData)
    } else {
      return []
    }
  }

  saveStorage(todoKey: string, todos:ITodo[]) {
    localStorage.setItem(todoKey, JSON.stringify(todos))
  }

}