import React from 'react'
import Likert from 'react-likert-scale';

export const Likertsskala = () => {
  const likertOptions = {
    
    responses: [
      { value: 1, text: "Schlecht (1)" },
      { value: 2, text: "Ungenügend (2)" },
      { value: 3, text: "Ausreichend (3)" },
      { value: 4, text: "Gut  (4)" },
      { value: 5, text: "Sehr Gut (5)" },
      { value: 6, text: "Hervorragend (6)" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
}