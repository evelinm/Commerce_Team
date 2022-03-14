import React from 'react';

const  SearchBar = ()=> {
    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Customer Search</label>
                    <input type="text"/>
                </div>
            </form>
        </div>
    )

}
export default SearchBar;