import React, {  useEffect, useState } from "react";
import { Button, Form, Select } from "react-bootstrap";
import { IconButton} from '@material-ui/core';

import Nav from './components/nav';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import taskService from './taskService';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Checkbox, InputLabel, MenuItem, Paper, TextField } from "@material-ui/core";
import "./home.css";


 function Edit(props) {

  const[name,setName] =  useState("");
  const[description,setDescription] =  useState("");
  let {id} =  useParams();

useEffect(()=>{
  taskService.getTaskById(id).then((res) => { 
    setName(res.data.name);
    setDescription(res.data.description);
})},[]);


  const updateTask = (e) => {
    const task = { name, description};
    const res = taskService.updateTask(task,id);
    window.location.reload();
  };


  return (
    <div>
      <Paper style={{marginTop: 0}} elevation={3} className="root">
      <Link to="/display" ><Button >Back</Button></Link>
        <h1>update details</h1>
        <div className="row">
          <h3>Title</h3>
          <TextField type="text" value={name} onChange={(e) => setName(e.target.value)}  name="Title"  required/>
         </div>
        <div className="row">
          <h3>Description </h3>
          <TextField type="text" value={description}  onChange={(e) => setDescription(e.target.value)} id="standard-basic" name="description" required/>
        </div>   

      <Button type="submit" onClick={updateTask} >update</Button>
      </Paper>
    
   
    </div>
  )
}
export default Edit;
