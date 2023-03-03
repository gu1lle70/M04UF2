import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class  TasckForm extends React.Component{
  
       constructor(props){
       super(props);
           this.state = {
           task: ""
       };
  }
 
 render(){
  return (
    <form>
     <p><TextField variant="standard" type="text" value={this.state.task} onChange=    {event => {
 
          this.setState({
             task:event.target.value
          });
 
          }} placeholder="Nueva Tarea"/></p>
 
          <Button variant="contained" type="button" onClick={() => {
          if (this.state.task.trim() == ""){
              this.setSatate({
              task: ""
             });
 
              return;
          }
 
          this.props.onAddTask(this.state.task);
          this.setState({
              task: ""
          });
  }}>+</Button>
          </form>
          );
     }
  }
 export default TasckForm;
