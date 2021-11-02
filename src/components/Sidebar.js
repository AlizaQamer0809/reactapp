import React, { useState } from 'react'


export default function Sidebar( props) {
  const [hover,sethover]=useState(false);
   function toggleHover(){
        sethover(true)
   }
  
   var linkstyle;
       if(hover){
           linkstyle={backgroundColor: props.contacts[0].color}
       }
       else{
           linkstyle={backgroundColor:"gray"}
       }
  
    
    return (
        
        <>
         <h1 style={{textAlign:"center"}}>Summary</h1>
       {props.contacts.map(contact=>
         <div  className="sidebardiv" >
                
         <div className="istcol">
             <div style={{float:"left"}}  className="color" style={{borderWidth:"5px" , color:contact.color}} >|</div>
             <div className="id">{contact.Id}</div>
         </div>
         <div className="secondcol">
             <div className="country">{contact.title}</div>
            
         </div>
     </div>
)}
    
       
           
            </>
        )
    }
