import React, { useState } from 'react';


const  SearchBar = ({ data })=> {
    const [filterFirstName, setFiterFirstName] = useState([]);
    const [nameEntered, setNameEntered] = useState('');
    

    const handleFilter = (e) => {
       const query =  e.target.value.trim().toLowerCase();
       setNameEntered(e.target.value);

       const newFilter = data.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(query) 
            || `${lastName} ${firstName}`.toLowerCase().includes(query);
       })

       if (query === "") {
           setFiterFirstName([]);
       } else 
       {
          return setFiterFirstName(newFilter)
       }
       
    }
    return (
        <div className="ui segment">
            <form  className="ui form">
                <div className="field">
                    <label>Customer Search</label>
                    <input type="text" value={nameEntered} onChange={handleFilter} />
                    {filterFirstName.length != 0 && (
                        <div className="result">
                        {
                            filterFirstName.slice(0,10).map((value,key) => {
                                return <div key={key}> 
                                {value.firstName} {value.lastName} 
                                </div>
                        })
                        }
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}
export default SearchBar;