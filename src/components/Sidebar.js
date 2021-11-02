import React, { useState } from 'react'
import Sliderdata from './Sliderdata'


export default function Sidebar( props) {
 
    
    return (
        
        <>
         <h1 style={{textAlign:"center"}}>Summary</h1>
       {props.contacts.map(contact=>
         <Sliderdata contact={contact}/>
)}
    
       
           
            </>
        )
    }
