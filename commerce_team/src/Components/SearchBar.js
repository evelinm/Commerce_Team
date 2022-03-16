import React, {useState} from 'react';
// import CustomerList from './customerList';


const  SearchBar = ({data})=> {
    const [filterFirstName, setFiterFirstName] = useState([]);
    const [nameEntered, setNameEntered] = useState('');
    

    const handleFilter = (e) => {
       const searchFirstName =  e.target.value;
       setNameEntered(searchFirstName);

       const newFilter = data.filter((value) => {
            return value.firstName.slice(0,20).toLowerCase().includes(searchFirstName.toLowerCase()) || value.lastName.slice(0,20).toLowerCase().includes(searchFirstName.toLowerCase())
       })

       if (searchFirstName === "") {
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
                            filterFirstName.slice(0,20).map((value,key) => {
                                return <div key={key}> 
                                {value.firstName} {value.lastName} 
                                </div>
                            })
                        }
                        </div>
                    )}
                    {/* <CustomerList firstName={value.firstName}/> */}
                </div>
            </form>
        </div>
    )
}
export default SearchBar;