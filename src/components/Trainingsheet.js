import React from 'react'
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
      </div>
      <h2>
        geplante Trainingsintensität der Trainingseinheit
      </h2>
      <div >
        <Likertsskala />
      </div>
      <h2>
        erreichte Trainingsintensität der Trainingseinheit
      </h2>
      <div>
        <Likertsskala />
      </div>
      <button onClick={"You clicked a button!"}>
        Fertig
      </button>
 
    </>
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