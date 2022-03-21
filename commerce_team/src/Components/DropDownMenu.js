import React from 'react';
import '../CSS/drop-down.scss';

const DropDownMenu = ({ data }) => {
   
   let unique = [];

   data?.forEach((val) => {
       unique.push(val.company)
   })

   unique = [...new Set(unique)]

    return (
      <div className="drop-down-container" id="companyDropDown">
        Companies : 
        <select className="drop-down-menu" id="dropDownSelector">
        {unique.sort().slice(0,100).map((value) => {
           return <option> {value} </option>})
           }
        </select>
      </div>
    )
}
export default DropDownMenu;