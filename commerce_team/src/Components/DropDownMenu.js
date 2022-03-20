import React from 'react';
import '../CSS/drop-down.scss';

const DropDownMenu = ({ data }) => {
   
   let unique = [];
   
   data.map((val) => {
       unique.push(val.company)
   })

   unique = [...new Set(unique)]

    return (
      <div className="drop-down-container">
        Company Name : 
        <select className="drop-down-menu">
        {unique.sort().slice(0,100).map((value) => {
           return <option>{value} </option>})
           }
        </select>
      </div>
    )
}
export default DropDownMenu;