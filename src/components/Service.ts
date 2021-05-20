import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { ITodo } from '../interfaces';


export class Service {
	@observable todos:ITodo[] = [];

	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: Date.now(),
			completed: false
		}]
		console.log('service', this.todos)
	}

	@action deleteTodo(id:number) {
		this.todos = this.todos.filter(todo => todo.id !== id)
		console.log('delete', id)
	}

	@action completeTodo(id:number) {
		this.todos = this.todos.map(todo => {
			if (todo.id === id) {
				return{
					...todo,
					completed: !todo.completed
				}
			}
			return todo
		})
		console.log('complete',this.todos)
	}
}



