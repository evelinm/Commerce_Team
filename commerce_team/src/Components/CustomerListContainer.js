import React from 'react';
import '../CSS/customer-list.css';

const CustomerList = ({sortValue}) => {
    return (
  
    <div className="customer-list-container">
    {sortValue.slice(0,50).map((value) => {
           return <div className="customers-information"> {value.firstName}   {value.lastName}   {value.company} </div>})
    }
    </div>
    )
}
export default CustomerList;