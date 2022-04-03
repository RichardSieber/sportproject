import React from 'react'
<<<<<<< HEAD
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
=======
import { Likertsskala } from './Likertsskala'
import './Trainingsheet.css' 

const Trainingsheet = () => {
  const [name, setName] = React.useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
     
    return (  
    <>
      <br></br>
      <div className='app-dropdown' >
      <Dropdown 
        label="Bitte einen Namen auswählen!  "
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
        value={name}
        onChange={handleNameChange}
      />
      </div>
      <h2>
        Trainingsqualität von {name} 
      </h2>
      <div >
      <Likertsskala />
>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
      </div>
      <h2>
        geplante Trainingsintensität der Trainingseinheit
      </h2>
<<<<<<< HEAD
      <div className='app-radiobutton'>
        <TIntensityPlanned 
            onChange={(e) => setPlanIntensity(e.target.value)} 
            required
 
        />
=======
      <div >
        <Likertsskala />
>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
      </div>
      <h2>
        erreichte Trainingsintensität der Trainingseinheit
      </h2>
<<<<<<< HEAD
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
=======
      <div>
        <Likertsskala />
      </div>
      <button onClick={"You clicked a button!"}>
        Fertig
      </button>
 
    </>
  )
}
>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
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