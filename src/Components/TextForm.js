import React,{useState} from 'react'
import '../Components/TextForm.css'
export default function TextForm (props) {
  const handleUpClick=()=>
  {
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","Success");
  }
  const handleLowClick=()=>
  {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","Success");
  }
 
  const handleCopyClick=()=>
  {
  let text=document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value)
   props.showAlert("Copied to clipboard","Success");
  }

  const handleistClick=()=>
  {
    let newText=text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted ist char in uppercase","Success");
  }
  const handleclearClick=()=>
  {
    let newText=" ";
    setText(newText);
    props.showAlert("Text cleared","Success");
  }
  const handleOnChange = (event) =>
  {
    setText(event.target.value);
  }
  const [text,setText]= useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white' : '#042743' }}>
        <h1>{props.heading}</h1>
     
        <div className="mb-3">
    
    <textarea className="form-control"  title="Must be at least 8 characters." value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey' : 'white' ,
 color: props.mode ==='dark'?'white' : '#042743' }}  id="myBox" rows="8"   ></textarea>
   </div>
   
   <div className="buttons">
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
   <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
   <button className="btn btn-primary mx-2" onClick={handleistClick}>1st char in uppercase</button>
   
   <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
   <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
   </div>
    </div>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white' : '#042743' }}>
      <h2> Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <>{0.008*text.split(" ").length} Minutes read</>
      <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the something above to preview"}</p>
    </div>
   
   
    </>
  );
}
