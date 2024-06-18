import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function Textarea(props) {
    const handleInClick=()=>
    {
      let newText=text;
      let InversedString=newText.split("").map((char)=>
      {
        if(char ===char.toUpperCase())
          {
            return char.toLowerCase();
          } 
          else
          {
            return char.toUpperCase();
          }
      }).join("");
      setText(InversedString);
      props.showAlert("Conveted to InverseCase","success");
    }

  // () =>  navigator.clipboard.writeText('Copy this text to clipboard')
  const handleCpClick=()=>
    {
      let newText=text;
      navigator.clipboard.writeText(newText);
      props.showAlert("Text Copied","success");

    }

  const handleClearClick=()=>
    {
      let newText=('');
      setText(newText);
      props.showAlert("Text Cleard","success");

    }
    
  const handleLoClick=()=>
    {
      // console.log("Lowercase Clicked" +text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Conveted to LowerCase","success");

    }
  const handleUpClick=()=>
    {
        // console.log("Uppercase Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Conveted to  UpperCase","success");

    }
  const handleOnChange=(event)=>
    {
        // console.log("On Change");
        setText(event.target.value)
    }
  const handleExtraSpaces=()=>
    {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces removed","success");

    }

  const[text,setText]=useState("");

  
  
    return (
    
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'#003366',}}>
        <h1>{props.title}</h1>
        <div className="mb-3">      
            <textarea className="form-control" value={text}
            onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#003366':'white',color:props.mode==='dark'?'white':'#003366' }}></textarea>
            <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleInClick}>Convert to InverseCase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCpClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>

        </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#003366'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length}minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox"}</p>
    </div>
    </>
  )
}

Textarea.propTypes = 
{
    title: PropTypes.string
};

Textarea.defaultProps = 
{
    title : "Enter text here"
};