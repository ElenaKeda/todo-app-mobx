import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo } from '../interfaces';
import { Redirect } from 'react-router';


export class Service {
	@observable todos:ITodo[] = [];

	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: Date.now(),
			completed: false
		}]
	}

	@action.bound deleteTodo(id:number) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}

	@action.bound completeTodo(id:number) {
		this.todos.forEach(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
	}

	@action.bound editTodo (id:number, title:string) {
    console.log("===> todo changed!", id, title);
	}
}


