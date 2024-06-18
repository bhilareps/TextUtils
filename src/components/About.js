import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle]=useState(
    // {
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'rgb(5 32 59)':'white'
    }

    // const [btnText,setBtnText]=useState('Enable Dark Mode');

    // const toggleStyle=()=>
    // {
    //     if(myStyle.color==='black')
    //         {
    //             setmyStyle({
    //                 color:'white',
    //                 backgroundColor:'black',
    //                 border:'1px solid white'
    //             })
    //             setBtnText('Enable Light Mode')
    //         }
    //     else
    //     {
    //         setmyStyle(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         )
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
  return (
    <div>
            <div className="container my-2" style={myStyle}>
                <h1 className="my-2">About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a versatile tool designed for analyzing text. It offers a range of features to process and evaluate textual data, including word count, character count, readability scoring, and keyword extraction. By utilizing TextUtils, users can gain insights into the structure, content, and complexity of their text, making it a valuable resource for writers, researchers, and anyone working with written material.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is a free-to-use tool, making it accessible to everyone without any cost. Users can take advantage of its comprehensive text analysis features without needing to subscribe or pay fees. This ensures that anyone, from students to professionals, can benefit from its capabilities to enhance their text analysis and writing processes without financial barriers.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is browser compatible, meaning it can be accessed and used directly from any web browser without the need for additional software or downloads. This compatibility ensures that users can conveniently utilize its text analysis features on various devices, including desktops, laptops, tablets, and smartphones. The tool's seamless integration with web browsers enhances accessibility and ease of use, allowing users to perform text analysis tasks from anywhere with an internet connection.
        </div>
        </div>
    </div>
    </div>
        {/* <div className="container my-3">
            <button  onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>


    </div>
  )
}
