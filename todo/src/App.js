import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './Todo.css';

class App extends React.Component {
 constructor (props){
   super(props);
   this.state = {
       tasklist: []

  };
}


addTask = (task) => {

 console.log(task);
  this.state.tasklist.unshift(task);
	this.setState({
	 tasklist: this.state.tasklist

 });
}

deleteTask = (taskNum) => {

this.state.tasklist.splice(taskNum, 1);

this.setState({
 	tasklist: this.state.tasklist
 });

}

render () {

return (

<Box
  sx={{
  	display:'flex',
  	flexWeap:'wrap',
  	justifyContent:'center',
  	alignItems:'center',
  	height:'100%',
  	background: 'linear-gradient(to right bottom, #430089 , #82ffa1)'
  }}
>
<Paper elvation={3}
	sx={{
	padding:'16px'
	}}
>
<Title text="ToDo List"/>
<TaskForm onAddTask={this.addTask} />
	<TaskList list ={this.state.tasklist} onDeleteTask={this.deleteTask} />
<p>Tienes <strong>{this.state.tasklist.length}</strong> Tareas Pendientes </p>
</Paper>
</Box>
	);
  }
}
export default App;
