import React from 'react'
import Athletes from '../athletes.json'

const DbFunctions = () => {
  return (
    <div>
        <Names/>
    </div>
  )
}
const Names = () => {
    return(  
        <div>
        {
            Athletes && Athletes.map( athlet => {
                return(
                    <div key={ athlet.id }>
                        {athlet.name}
                    </div>
                )
            })
        }
        </div>
    );
};
export default DbFunctions