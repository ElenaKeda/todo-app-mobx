import { injectable } from 'inversify';
import React from 'react';
import { Service } from '../components/Service'
import { IStorageService, ITodo } from '../interfaces';
import { myContainer } from '../inversify.config';
import { TYPES } from '../types';
import {expect} from 'chai';
import "reflect-metadata"


// interface IStorageMocha {
//   storage: any,
//   getItem(key: string): string | null,
//   setItem(key:string, todos:ITodo[]): void,
// }

@injectable()
class StorageMocha implements IStorageService{
  storage: any;
  constructor(storage:any) {
    this.storage = storage
  }
  getStorage (key:string) {
    return this.storage[key] || null;
  }
  saveStorage(key:string, todos:ITodo[]) {
      this.storage[key] = todos;
    }
}

myContainer.rebind(TYPES.StorageService).to(StorageMocha)

describe('test service', () => {
  it('add new todo', () => {
    console.log('test service log')
    const service = new Service();

    const state = service.todos;
    service.createTodo('test title');

    expect(state.length).equal(1);
  })
})