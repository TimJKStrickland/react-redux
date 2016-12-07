import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, completeTask } from './actions';
import TaskList from './tasklist';

class App extends Component {
	
	constructor(props){
		super(props);
	}

	handleCompletedTask(task){
		const { dispatch } = this.props;
		dispatch(completeTask(task.id));
	}

	componentDidMount(){
		const { dispatch } =this.props;
		dispatch(getTasks());
	}

	render() {
		// dispatch method used with Connect from Provider
		// TODO: figure out why
		const { dispatch, habits, dailies, todos } = this.props;

		return(
			<div>
				<section>
					<h3>Habits</h3>
					<TaskList 
					onCompleteTask= {(task) => this.handleCompletedTask(task)}
					tasks = {habits} />
				</section>
				<section>
					<h3>Dailies</h3>
					<TaskList
					onCompleteTask= {(task) => this.handleCompletedTask(task)}
					 tasks= {dailies} />
				</section>
				<section>
					<h3>ToDo's</h3>
					<TaskList 
					onCompleteTask= {(task) => this.handleCompletedTask(task)}
					tasks= {todos} />
				</section>
			</div>
		)
	}
}

function select(state) {
	return {
		habits: state.tasks.filter(task => task.type === 'habit'),
		dailies: state.tasks.filter(task => task.type === 'daily'),
		todos: state.tasks.filter(task => task.type === 'todo')
	}
}

export default connect(select)(App);