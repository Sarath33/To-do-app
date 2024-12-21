import React, {  useEffect, useState } from "react";
import { Button, Form, Select } from "react-bootstrap";

import Alert from '@mui/material/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import { Paper, TextField } from "@material-ui/core";
import "./home.css";
import taskService  from './taskService';
import Nav from "./components/nav";
function Home(props) {

  const[open,setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

//const lengther = JSON.parse(localStorage.getItem("entries"));
   useEffect(()=>{
     
   })


  const saveTask = (e) => {
    e.preventDefault();
    const task = { name, description};
    console.log(task);
    const res = taskService.createTask(task);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      window.location.reload();
    }, 2000);
};

 
  return (
    <div>
      <Nav />
      {open && (
          <Alert severity="success">This is a success Alert.</Alert>
        )}
      <Paper elevation={3} className="root">
        <h1>Add Task</h1>
        <div className="row">
          <h3>Title</h3>
          <TextField type="text" value={name} onChange={(e) => setName(e.target.value)}  name="Title"  required/>
         </div>
        <div className="row">
          <h3>Description </h3>
          <TextField type="text" value={description}  onChange={(e) => setDescription(e.target.value)} id="standard-basic" name="description" required/>
        </div>
        <Button  type="submit" onClick={saveTask}>Add task</Button>
      </Paper>
    
    </div>
  );
}

export default Home;
