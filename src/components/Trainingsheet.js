import React from 'react'
import DbFunctions from './DbFunctions';
import { Likertsskala } from './Likertsskala'
import Radiobutton from './Likertsskala';
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
  
     const handleSubmit = (e) => {
         e.preventDefault()
         
         if (quality && planIntensity && achIntensity){
             console.log(quality, planIntensity, achIntensity)
             
         }
     }
    return (  
    <form noValidate onSubmit={handleSubmit}>
      <h2>
        Trainingsqualität von Athlet X
      </h2>
      <div className='app-radiobutton'>
      <TQuality
            onChange={(e) => setQuality(e.target.value)} 
            required

        />
      </div>
      <h2>
        geplante Trainingsintensität der Trainingseinheit
      </h2>
      <div className='app-radiobutton'>
        <TIntensityPlanned 
            onChange={(e) => setPlanIntensity(e.target.value)} 
            required
 
        />
      </div>
      <h2>
        erreichte Trainingsintensität der Trainingseinheit
      </h2>
      <div className='app-radiobutton'>
        <TIntensityAchieved 
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
  

export default Trainingsheet