import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, completeTask } from './actions';
import TaskList from './tasklist';
import Header from './header';

class App extends Component {
	
	constructor(props){
		super(props);
	}

	handleCompletedTask(task){
		const { dispatch } = this.props;
		dispatch(completeTask(task.id));
	}

	componentDidMount() {
		const { dispatch } =this.props;

		dispatch(fetchTasks());
	}

	render() {
		// dispatch method used with Connect from Provider
		// TODO: figure out why
		const { dispatch, habits, dailies, todos } = this.props;

		return(
			<div className="container">
				<Header/>
				<section>
					<h3>Habits</h3>
					<TaskList 
					onCompleteTask = {(task) => this.handleCompletedTask(task)}
					tasks = {habits} type="habit" />
				</section>
				<section>
					<h3>Dailies</h3>
					<TaskList
					onCompleteTask = {(task) => this.handleCompletedTask(task)}
					 tasks= {dailies} type="daily" />
				</section>
				<section>
					<h3>ToDo's</h3>
					<TaskList 
					onCompleteTask = {(task) => this.handleCompletedTask(task)}
					tasks= {todos} type="todo" />
				</section>
			</div>
		)
	}
}

function select(state) {
	console.log(state, 'current state');
	return {
		habits: state.tasks.filter(task => task.type === 'habit'),
		dailies: state.tasks.filter(task => task.type === 'daily'),
		todos: state.tasks.filter(task => task.type === 'todo')
	}
}

export default connect(select)(App);