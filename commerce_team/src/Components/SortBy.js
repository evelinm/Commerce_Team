import React, { useState } from 'react';
import '../CSS/sort-by.css';
import CustomerListContainer from './CustomerListContainer';

const SortBy = () => {
    return (
        <div>
            <div className="dropdown">
            <div className="dropdown-btn"> Sort By 
            </div>
            <div className="dropdown-content"> 
             <div className="dropdown-item"> 
             Customers Name - Ascending
             </div>
             <div className="dropdown-item"> 
             Customers Name - Descending
             </div>
             <div className="dropdown-item"> 
             Company Name  - Ascending
             </div>
             <div className="dropdown-item"> 
             Company Name - Descending
             </div>
            </div>
            </div>
            <div className="customer-list-container">
                <CustomerListContainer/>
            </div>
        </div>
    )

}
export default SortBy;