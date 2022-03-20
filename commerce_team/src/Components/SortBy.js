import React, { useState } from 'react';
import '../CSS/drop-down.scss';
import CustomerListContainer from './CustomerListContainer';

const SortBy = ({ data }) => {

    const [ sortValue, setSortValue ] = useState([]);

   const handleSort =  (e) => {
        let value = e.target.value;

        const ascendingFirstName =  (a, b) => (a.firstName > b.firstName) ? 1 : -1;
        const descendingFirstName = (a, b) => (a.firstName < b.firstName) ? 1 : -1;
        const ascendingLastName = (a, b) => (a.lastName> b.lastName) ? 1 : -1;
        const descendingLastName = (a, b) => (a.lastName < b.lastName) ? 1 : -1;
        const ascendingCompany = (a, b) => (a.company > b.company) ? 1 : -1;
        const descendingCompany = (a, b) => (a.company < b.company) ? 1 : -1;

        if (value === "ascendingFirstName") {
            setSortValue([...data].sort(ascendingFirstName ))
        }
        else if ( value === "descendingFirstName") {
            setSortValue([...data].sort(descendingFirstName))
        }
        else if (value === "ascendingLastName") {
           setSortValue([...data].sort(ascendingLastName))
        }
        else if (value === "descendingLastName") {
            setSortValue([...data].sort(descendingLastName))

        }
        else if (value === "ascendingCompany") {
            setSortValue([...data].sort(ascendingCompany))

        }
        else if (value === "descendingCompany") {
            setSortValue([...data].sort(descendingCompany))
           
        }
    }
    
    return (
        <div className="drop-down-container" id="sortBy">
            Sort By : 
                <select className="drop-down-menu" onChange={ handleSort }> 
                   <option  value="ascendingFirstName" > 
                   First Name - Ascending
                    </option>
                    <option value="descendingFirstName"> 
                    First Name - Descending
                    </option>
                    <option value="descendingLastName"> 
                    Last Name - Descending
                    </option>
                    <option value="ascendingLastName"> 
                    Last Name - Ascending
                    </option>  
                    <option value="ascendingCompany"> 
                    Company Name - Descending
                    </option>
                    <option value="descendingCompany"> 
                    Company Name - Ascending
                    </option> 
                </select>
                <CustomerListContainer sortValue={sortValue}  />
        </div>
    )
}
export default SortBy;