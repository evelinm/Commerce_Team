import React,{useState} from 'react';
import "../CSS/drop-down-menu.css"

const DropDownMenu = ({data}) => {

   const [isActive, setIsActive ] = useState(false);

    return (
        <div className="dropdown">
        <div className="dropdown-btn" onClick={(e)=> setIsActive(!isActive)}> Company Name
        <span className="dropdown-caret"> + </span>
         </div>
        <div className="dropdown-content"> 
        
           {isActive && (data.map((value) => {
           return <div className="dropdown-item">{value.company} </div>})
           )}

        
        </div>
        </div>
    )

}
export default DropDownMenu;