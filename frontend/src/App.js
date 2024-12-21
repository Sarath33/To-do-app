import './App.css';
import Home from './admin/home';
import Edit from './admin/edit';
import Employee from './admin/employee';
import {Switch,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/display' element={<Employee/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      </Routes> 
  </div>
  );
}

export default App;