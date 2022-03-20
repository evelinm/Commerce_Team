import React from 'react';
import "../CSS/drop-down-menu.css"

const DropDownMenu = ({ data }) => {
   
   let unique = [];
   data.map((val) => {
       unique.push(val.company)
   })
   unique = [...new Set(unique)]

    return (
      <div>
        Companys : 
        <select>
        {unique.sort().slice(0,100).map((value) => {
           return <option>{value} </option>})
           }
        </select>
      </div>
    )
}
export default DropDownMenu;