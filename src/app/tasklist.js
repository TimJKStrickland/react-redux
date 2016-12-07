import React, { Component } from 'react';


class TaskList extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const { onCompleteTask, tasks } = this.props; 
		return (
			<ul>
			{ tasks.map(task =>
						<li>
							<span onClick={() => {onCompleteTask(task)}}> [ ]</span>
							{task.text}
						</li>
				)}
			</ul>

		)
	}
}

export default TaskList;