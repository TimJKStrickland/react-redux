// action types: exported to variable for fewer errors
import fetch from 'isomorphic-fetch';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

import { uuId, apiToken } from './configure';


export function fetchTasks(){
	return function(dispatch){
		return fetch('https://habitica.com/api/v3/tasks/user',
			{
				headers: {
					'X-API-User': uuId,
					'X-API-Key' : apiToken
				}
			})
		.then(response => response.json())
		.then((json) => {
			dispatch(receiveTasks(json.data));
		});
	};
}

export function receiveTasks(tasks){
	return{
		type: RECEIVE_TASKS,
		payload: { 
			tasks
		}
	};
}

export function addTask(text, type) {
	return {
		type: ADD_TASK,
		payload: {
			text,
			type
		}
	};
}

export function completeTask(id) {
	return{
			type: COMPLETE_TASK,
			payload: {
				id
			}
		};
}
