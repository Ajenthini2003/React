//Create a color picker from 5 buttons
import React from "react";
import { useState } from "react";

const PRESET_COLORS=[
  '#FF5733',
  '#4287F5',
  '#28A745',
  '#8E44AD',
  '#F1C40F'

]
 
export default function ColorChange(){

  const[selectedColor,setSelectedColor]=useState(PRESET_COLORS[0]);
  const handleColorInputChange=(event)=>{setSelectedColor(event.target.value);};
  const handlePresetClick=(color)=>{setSelectedColor(color);};


  return(
    <div style={{maxWidth:"400px",padding:"30px",borderRadius:"20px",border:"2px solid green"}}>
      <input type="color" value={selectedColor} onChange={handleColorInputChange} title="custom color picker"></input>

      <div>
        {PRESET_COLORS.map((color,index)=>(
          <button
          key={index}           
          onClick={() => handlePresetClick(color)}
          style={{
              backgroundColor: color,
              width: '35px',
              height: '35px',
              borderRadius: '4px',
              border: `2px solid ${selectedColor.toLowerCase() === color.toLowerCase() ? '#333' : 'transparent'}`,
              outline: 'none',
              cursor: 'pointer',
              padding: 0,
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              margin:"20px"
            }}
            title={color}></button>
        ))}
      </div>

      <div
      style={{
          width: '300px',
          height: '80px',
          backgroundColor: selectedColor,
          borderRadius: '4px',
          textAlign: 'center',
          lineHeight: '80px',
          margin:"30px"
          
        }} 
     >color:**{selectedColor}**</div>

      
    </div>
  )
}





      
      
     



      