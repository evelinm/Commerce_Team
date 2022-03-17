import React from 'react';
import response from "../Response.json";
import '../CSS/main.css';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import DropDownMenu from './DropDownMenu';





const App = () => {
    return (
        <div className="ui container" style={{marginTop: '20px'}}>
            <div className="customer-information-container">
            <SearchBar data={response}/>
           <div className="company-name-drop-down"><DropDownMenu data={response}/></div> 
            <div className="sorting-filter"> <SortBy data={response}/></div>
            </div>
        </div>
    )
};
export default App;