import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Footer from './components/Footer';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
    {
      setAlert
      (
        {
          msg:message,
          type:type
        }
      )
      setTimeout(()=>
      {
        setAlert(null)
      },1500)
    }

  const toggleMode=()=>
    {
      if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor='rgb(5 32 59)';
          showAlert("Dark mode has been enabled","success");
          // document.title="TextUtils-Dark Mode";
          // setInterval(()=>
          //   {
          //     document.title="TextUtils is Amazing"
          //   },1000)
          //   setInterval(()=>
          //     {
          //       document.title="Install TextUtils Now"
          //     },1500)
        }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        // document.title="TextUtils-Light Mode";
      }
    }

  return (
    <>
    <Router>
    <Navbar  title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* /users-component-1
    /users/home-component-2 */}
    <div className="container my-3">
      <Routes>
        <Route path="/" element={ 
          <Textarea title="Enter text here" mode={mode} showAlert={showAlert}/> 
        }/>
      <Route path="/about" element={ <About mode={mode}/> }/>
      </Routes>
    </div>   
    {/* <div > */}
          {/* <Footer/> */}
    {/* </div> */}
    </Router>
 
 
    
    
    
    </>
  );
}

export default App;
