import React, {useState} from 'react';


const  SearchBar = ({data})=> {
    const [filterFirstName, setFiterFirstName] = useState([]);
    const [filterLastName, setFilterLastName] = useState([]);

    const handleFilter = (e) => {
       const searchFirstName =  e.target.value;
    //    const serchLastName = e.target.value;

       const newFilter = data.filter((value) => {
            return value.firstName.slice(0,2).toLowerCase().includes(searchFirstName.toLowerCase()) || value.lastName.slice(0,2).toLowerCase().includes(searchFirstName.toLowerCase())
       })

       if (searchFirstName === "") {
           setFiterFirstName([]);
       } else 
       {
           setFiterFirstName(newFilter)
       }
       
    }
    return (
        <div className="ui segment">
            <form  className="ui form">
                <div className="field">
                    <label>Customer Search</label>
                    <input type="text" onChange={handleFilter} />
                    {filterFirstName.length != 0 && (
                        <div className="result">
                        {
                            filterFirstName.map((value) => {
                                return <div>{value.firstName} {value.lastName} </div>
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