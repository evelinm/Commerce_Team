import React, {useState} from 'react';
import response from "../Response.json";
import SearchBar from './SearchBar';
import DropDownMenu from './DropDownMenu';




const  App = () => {
    return (
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar data={response}/>
            <DropDownMenu data={response}/>
        </div>
    )
};
export default App;