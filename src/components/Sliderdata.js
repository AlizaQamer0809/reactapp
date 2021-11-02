import React,{useState} from 'react'

export default function Sliderdata(props) {
    const [hover,sethover]=useState(false);
    function toggleHover(){
         sethover(true)
    }
   
    var linkstyle;
        if(hover){
                     linkstyle={backgroundColor: props.contact.color}
        }
        else{
            linkstyle={backgroundColor:"gray"}
        }
   
    return (
        <>
        
      
         <div style={linkstyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}  className="sidebardiv" >
                
         <div className="istcol">
             <div style={{float:"left"}}  className="color" style={{borderWidth:"5px" , color:props.contact.color}} >|</div>
             <div className="id">{props.contact.Id}</div>
         </div>
         <div className="secondcol">
             <div className="country">{props.contact.title}</div>
            
         </div>
     </div>

    
       
           
            </>
    )
}
