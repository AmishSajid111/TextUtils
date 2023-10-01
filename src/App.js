
import React, { useState } from 'react';

import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';



function App() {
 const [mode,setMode]= useState('light');
 const [alert,setAlert]= useState(null);

const toggleMode=()=>

{
if (mode==='light')
{
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","Success");
}
else
{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","Success");
}
}
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>
  {
    setAlert(null);
    
},1500);

}
  return (          
 <>

 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        
  
  
 
</div>

 </>
);
  }
export default App;
