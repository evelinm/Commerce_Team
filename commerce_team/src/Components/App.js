import React from 'react';
import response from "../Response.json";
import '../CSS/main.css';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import DropDownMenu from './DropDownMenu';





const App = () => {
    return (
        <div className="ui container">
            <SearchBar data={response}/>
           <div className="company-name-drop-down">
           <div className="drop-down-container"> <DropDownMenu data={response}/></div>
           <div className="sort-by-container"><SortBy data={response}/></div>
           </div>
            </div>
    )
};
export default App;