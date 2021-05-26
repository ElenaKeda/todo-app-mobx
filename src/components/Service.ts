import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo } from '../interfaces';


export class Service {
	@observable todos:ITodo[] = [];
	constructor() {
		console.log('constructor')
	}

	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: Date.now(),
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

	@action.bound editTodo = (todo:ITodo, value:string) => {
		this.todos.forEach(item => {
			if (item.id === todo.id) {
				item.title = value
			}
			return item
		})

		// console.log(this.todos.find(item=> item.id===todo.id).title)
  }
}


