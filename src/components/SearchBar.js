import React, { useState } from 'react';
import './SearchBar.css'
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
       
       <div className="right menu">
      <form onSubmit={onSubmit} >
      <div className="item-nae large">
      <div className="ui icon input large">
       <input type="text" 
          value={term}
            onChange={(event) => setTerm(event.target.value)}
     
    placeholder="Search..." />
    <i className=" red search link icon large"></i>
       </div>
      </div>
     </form>
      </div>
       );
};

export default SearchBar;
