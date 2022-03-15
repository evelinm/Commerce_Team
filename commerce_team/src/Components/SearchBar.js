import React, {useState} from 'react';


const  SearchBar = ({onSubmit})=> {
   const onInputChange = (e) =>{
       setCustomer(e.target.value)
    }
    const [customer,setCustomer] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(customer);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Customer Search</label>
                    <input type="text"  value={customer}onChange={onInputChange}/>
                </div>
            </form>
        </div>
    )

}
export default SearchBar;