import React, { useState } from 'react';
import '../CSS/sort-by.css';
import CustomerListContainer from './CustomerListContainer';

const SortBy = ({ data }) => {

    const [ isActive, setIsActive ] = useState(false);
    const [sortValue, setSortValue] = useState([]);
    
    const handleSort = (e) => {
        let value = e.target.value;
        const ascending = (a, b) => (a.firstName > b.firstName) ? 1 : -1;
        setSortValue(value)
        return data.sort(ascending);
    }
    
    return (
        <div>
            <div className="dropdown">
                <div className="dropdown-btn"  onClick={(e)=> setIsActive(!isActive)} > Sort By 
                <span className="dropdown-caret"> + </span>
                </div>
                { isActive && 
                <div className="dropdown-content"> 
        
                   <div className="dropdown-item"   value= {sortValue} onClick={ handleSort }> 
                    Customers Name - Ascending
                    </div>
                    <div className="dropdown-item" value="descending"> 
                    Customers Name - Descending
                    </div>
                    <div className="dropdown-item"> 
                    Company Name  - Ascending
                    </div>
                    <div className="dropdown-item"> 
                    Company Name - Descending
                    </div>  
                </div> }
            </div>
                <CustomerListContainer sortValue={data}  />
        </div>
    )
}
export default SortBy;