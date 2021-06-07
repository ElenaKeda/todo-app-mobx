import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo, IService } from '../interfaces';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from '../types';
import { StorageService } from './StorageService';
import { myContainer } from '../inversify.config';


@injectable()
export class Service implements IService{

	storage: StorageService = myContainer.get(TYPES.StorageService)

	constructor () {
		const data = this.storage.getStorage('todos');
		if (!data) return this;
		this.todos = data
	}

	@observable todos:ITodo[] = [];
	
	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: String(Date.now()),
			completed: false
		}];
		this.storage.saveStorage('todos', this.todos);
	}

	@action.bound deleteTodo(todo:ITodo) {
		this.todos = this.todos.filter(item => item !== todo);
		this.storage.saveStorage('todos', this.todos)
	}

	@action.bound completeTodo(todo:ITodo) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.completed = !item.completed;
			}
			return item;
		})
		this.storage.saveStorage('todos', this.todos);
	}

	@action.bound editTodo (todo:ITodo, value:string) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.title = value;
			}
			return item;
		})
		this.storage.saveStorage('todos', this.todos);
  }
	
}


