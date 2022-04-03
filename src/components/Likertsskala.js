import React from 'react'
import Likert from 'react-likert-scale';
<<<<<<< HEAD
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Trainingsheet from './Trainingsheet';
import { textAlign } from '@mui/system';

/*
=======

>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
export const Likertsskala = () => {
  const likertOptions = {
    
    responses: [
      { value: 1, text: "Schlecht (1)" },
      { value: 2, text: "Ungenügend (2)" },
      { value: 3, text: "Ausreichend (3)" },
      { value: 4, text: "Gut  (4)" },
<<<<<<< HEAD
      { value: 5, text: "Sehr Gut (5)" },S
=======
      { value: 5, text: "Sehr Gut (5)" },
>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
      { value: 6, text: "Hervorragend (6)" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
<<<<<<< HEAD
}*/

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
    )
}
export default Radiobutton
=======
}
>>>>>>> 96650d024d496e16b9084078982eb1cf472fc7ca
