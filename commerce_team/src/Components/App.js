import React from 'react';
import SearchBar from './SearchBar';

const  App = () => {

    const onSearchSubmit = (customer) => {
        console.log(customer)
    }
    return (
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    )
};
export default App;