import React from 'react'
import DbFunctions from './DbFunctions';
//import { Likertsskala } from './Likertsskala'
//import Radiobutton from './Likertsskala';
import './Trainingsheet.css' 
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const Trainingsheet = () => {
    const [rating, setRating] = useState('')
    const [quality,setQuality] = useState('')
    const [planIntensity,setPlanIntensity] = useState('')
    const [achIntensity,setAchIntensity] = useState('')
  
    const handleChange = (event) => {
      setRating(event.target.value)
    }
    
     const handleSubmit = (e) => {
         e.preventDefault()
         
         if (quality && planIntensity && achIntensity){
             console.log(quality, planIntensity, achIntensity)
             
         }
     }
     const handleSubmit2 = (e) => {
      e.preventDefault()
      
      if (rating === true){
          console.log(rating)
          
      }
  }
    return (  
      <>
        <header className="app-header">
            Trainingapp
        </header>
    <form noValidate onSubmit={handleSubmit}>

      <h2>
        Trainingsqualität von Athlet X
      </h2>
      <div className='app-radiobutton'>
      <TQuality
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            required
            
        />
      </div>
      <h2>
        geplante Trainingsintensität der Trainingseinheit
      </h2>
      <div className='app-radiobutton'>
        <TIntensityPlanned 
            value={planIntensity}
            onChange={(e) => setPlanIntensity(e.target.value)} 
            required
 
        />
      </div>
      <h2>
        erreichte Trainingsintensität der Trainingseinheit
      </h2>
      <div className='app-radiobutton'> 
    
        <TIntensityAchieved  
            value={achIntensity}
            required
            onChange={(e) => setAchIntensity(e.target.value)} 
        />
      </div>
         <br>
        </br>
 
        <Button 
            type="submit"
            color="default"
            variant="contained"
        >
            Fertig
        </Button>

    </form>
    <footer className='app-footer'>
      &copy; Copyright 2022
      </footer>
    </>
  )
}
const TQuality = () => {
    return(
        <Radiobutton />
    )
}
const TIntensityPlanned = () => {
    return(
        <Radiobutton />
    )
}
const TIntensityAchieved = () => {
  /*<TIntensityAchieved 
            required
            onChange={(e) => setAchIntensity(e.target.value)} */
    return(
      
 
    <Radiobutton/>
    )
}
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select 
      value={value}
      onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

const Radiobutton = () => {
    const [rating, setRating] = useState('')
    return(
        <FormControl >
            <RadioGroup value={rating} onChange={(e) => setRating(e.target.value)} row>
                <FormControlLabel value= "1" control={<Radio/>} label = "1" />
                <FormControlLabel value= "2" control={<Radio/>} label = "2" />
                <FormControlLabel value= "3" control={<Radio/>} label = "3" />
                <FormControlLabel value= "4" control={<Radio/>} label = "4" />
                <FormControlLabel value= "5" control={<Radio/>} label = "5" />
                <FormControlLabel value= "6" control={<Radio/>} label = "6" />
            </RadioGroup>
        </FormControl>
    );
};
//export default Radiobutton
  

export default Trainingsheet