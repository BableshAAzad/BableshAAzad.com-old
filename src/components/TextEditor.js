
import React,{ useState } from 'react';
import NavbarText from './NavbarText';
import TextForm from './TextForm';
import AlertText from './AlertText';
import Footer from './Footer';

function TextEditor() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout( ()=>{
        setAlert(null);
      }, 1500);
  }
  const toggleMode = (cls)=> {
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
<NavbarText title='Text Editor'  toggleMode={toggleMode} />
<AlertText alert={alert}/>
<div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." mode={mode}/>
</div>
<Footer/>
</>
  );
}

export default TextEditor;
