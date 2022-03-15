import React, {useState} from 'react';
import response from "../Response.json";
import SearchBar from './SearchBar';




const  App = () => {

    return (
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar data={response}/>
        </div>
    )
};
export default App;