import React, { useState, useEffect } from 'react';
import '../CSS/sort-by.css';
import CustomerListContainer from './CustomerListContainer';

const SortBy = ({ data }) => {

    const [ sortValue, setSortValue ] = useState([]);

   const handleSort =  (e) => {
        let value =  e.target.value;

        const ascendingFirstName =  (a, b) => (a.firstName > b.firstName) ? 1 : -1;
        const descendingFirstName = (a, b) => (a.firstName < b.firstName) ? 1 : -1;
        const ascendingLastName = (a, b) => (a.lastName> b.lastName) ? 1 : -1;
        const descendingLastName = (a, b) => (a.lastName < b.lastName) ? 1 : -1;
        const ascendingCompany = (a, b) => (a.company > b.company) ? 1 : -1;
        const descendingCompany = (a, b) => (a.company < b.company) ? 1 : -1;

        if (value === "ascendingFirstName") {
            setSortValue(data.sort(ascendingFirstName ))
            console.log('1')
        }
        else if ( value === "descendingFirstName") {
            setSortValue(data.sort(descendingFirstName))
            console.log('2')
        }
        else if (value === "ascendingLastName") {
           setSortValue(data.sort(ascendingLastName))
           console.log('3')
        }
        else if (value === "descendingLastName") {
            setSortValue(data.sort(descendingLastName))
            console.log('4')

        }
        else if (value === "ascendingCompany") {
            setSortValue(data.sort(ascendingCompany))
            console.log('4')

        }
        else if (value === "descendingCompany") {
            setSortValue(data.sort(descendingCompany))
           
        }
    }
      

    
    return (
        <div>
            Sort By : 
                <select  onClick={ handleSort }> 
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