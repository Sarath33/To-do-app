import { Button, Card, CardContent, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Nav from './components/nav';
import './components/employee.css';
import taskService from './taskService';
function Employee()
{
   const [task, setTasks] = useState([]);
   const [showDetail, setshowDetail] = useState([]);
   const [value, setValue] = React.useState('all');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

    useEffect(() => {
      taskService.getTasks().then((res) => {
          setTasks(res.data);
      });
      console.log(task);
  }, []);

    const get = (id)=>{
        let profile =   task.filter(it=>{
                 if(it.id === id)
                 return it;
        })
        let k = (<div>
            <Card style={{ width: '18rem' }}>
                <h2>{profile[0].name}</h2>
             <ListGroup variant="flush">
             <ListGroup.Item>{profile[0].description}</ListGroup.Item>
            </ListGroup>
            
            </Card>
            
           <Link to={`/edit/${profile[0].id}`} ><Button  variant="contained" color="primary">Edit</Button></Link>
            <Button  onClick={()=>{
                    deleter(profile[0].id)
            }}  variant="contained" color="secondary">Delete</Button>
            <Button onClick={() =>{
                    completed(profile[0].id)
            }} variant="outlined" color="error"> Completed</Button>
        </div>)

        setshowDetail(k); 
     }

     const completed = (e)=>{
      let dum = task.filter(it =>{
          return it;
       });
   
    taskService.updateTaskStatus(dum[0].id,!dum[0].completed);
    window.location.reload();
    }
   
     const deleter = (e)=>{
       let dum = task.filter(it =>{
           if(it.id !== e)return it;
        })
        console.log(dum)
       taskService.deleteTask(dum[0].id);
       window.location.reload();
     }

     const color = (it) =>{
      if(it.completed === true) return "green";

      if(it.completed === false) return "white";
     }

     
    const k = task.filter(it=>value === "all" || value === "pending" && it.completed === false || value === "completed" && it.completed === true)
    .map(it=>(
        <Card  variant="outlined" style={{backgroundColor: color(it)}}>
        <CardContent className="content">
          <Typography className="name" color="textSecondary" gutterBottom>
            {it.name}
          </Typography>
          <div className="button">
          <Button  onClick={()=>{get(it.id)}} name={it.id} variant="outlined" color="secondary">
              View Details
            </Button>
            </div>
        </CardContent>
        </Card>   
    ))

    return(
        <div>
            <Nav/>
            <h1>Employee</h1>
            <Paper elevation={3} className="paper">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="All" value="all" />
                <Tab label="Pending" value="pending" />
                <Tab label="Completed" value="completed" />
            </Tabs>
            {k}
            </Paper>
           <div className="profile">
           {showDetail}
            </div>
        </div>
    )
}
export default Employee;