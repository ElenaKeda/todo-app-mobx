import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo, IService } from '../interfaces';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from '../types';
import { StorageService } from './StorageService';


@injectable()
export class Service implements IService{

	StorageService: StorageService;

	constructor (@inject(TYPES.StorageService)StorageService: StorageService) {
		this.StorageService = StorageService;
		const data = localStorage.getItem('todos');
		if (!data) return this;
		this.todos = JSON.parse(data);
	}

	@observable todos:ITodo[] = [];
	
	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: String(Date.now()),
			completed: false
		}];
		this.StorageService.saveStorage('todos', this.todos);
	}

	@action.bound deleteTodo(todo:ITodo) {
		this.todos = this.todos.filter(item => item !== todo);
		this.StorageService.saveStorage('todos', this.todos)
	}

	@action.bound completeTodo(todo:ITodo) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.completed = !item.completed;
			}
			return item;
		})
		this.StorageService.saveStorage('todos', this.todos);
	}

	@action.bound editTodo (todo:ITodo, value:string) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.title = value;
			}
			return item;
		})
		this.StorageService.saveStorage('todos', this.todos);
  }
	
}


