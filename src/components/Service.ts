import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo, IService } from '../interfaces';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../types";

@injectable()
export class Service implements IService{
	@observable todos:ITodo[] = [];
	// constructor() {
	// 	console.log('constructor')
	// }
	
	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: String(Date.now()),
			completed: false
		}]
	}

	@action.bound deleteTodo(todo:ITodo) {
		this.todos = this.todos.filter(item => item.id !== todo.id)
	}

	@action.bound completeTodo(todo:ITodo) {
		this.todos.forEach(item => {
			if (item.id === todo.id) {
				item.completed = !item.completed
			}
			return item
		})
	}

	
	@action.bound editTodo (todo:ITodo, value:string) {
		this.todos.forEach(item => {
			if (item.id === todo.id) {
				item.title = value
			}
			return item
		})
  }
}


