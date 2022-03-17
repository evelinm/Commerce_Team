import React,{ useState } from 'react';
import "../CSS/drop-down-menu.css"

const DropDownMenu = ({ data }) => {

   const [ isActive, setIsActive ] = useState(false);
   
   let unique = [];
   data.map((val) => {
       unique.push(val.company)
   })
   unique = [...new Set(unique)]

    return (
        <div className="dropdown">
        <div className="dropdown-btn" onClick={(e)=> setIsActive(!isActive)}> Company Name
        <span className="dropdown-caret"> + </span>
         </div>
        <div className="dropdown-content"> 
            All Companies
           { isActive && (unique.sort().slice(0,100).map((value) => {
           return <div className="dropdown-item">{value} </div>})
           )}
        </div>
        </div>
    )

}
export default DropDownMenu;