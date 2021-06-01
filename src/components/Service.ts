import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { ITodo, IService } from '../interfaces';
import { injectable, inject } from "inversify";
import "reflect-metadata";


@injectable()
export class Service implements IService{
	@observable todos:ITodo[] = [];
	
	@action createTodo(title:string) {
		this.todos = [...this.todos, {
			title,
			id: String(Date.now()),
			completed: false
		}]
	}

	@action.bound deleteTodo(todo:ITodo) {
		this.todos = this.todos.filter(item => item !== todo)
	}

	@action.bound completeTodo(todo:ITodo) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.completed = !item.completed
			}
			return item
		})
	}

	@action.bound editTodo (todo:ITodo, value:string) {
		this.todos.forEach(item => {
			if (item === todo) {
				item.title = value
			}
			return item
		})
  }
}


