import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormStyle, SearchContainer } from './SearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
	const [input, setInput] = useState('');
    const [inputSearch, setInputSearch] = useState(false);
  	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/' + input);
	}
    if(inputSearch) {
        // alert('hi');
    }
	return (
		<FormStyle onSubmit={submitHandler}>
			<SearchContainer>
                <div className="searchContainer-box">
                    <FontAwesomeIcon icon={faSearch} className="searchHoverIcon" />
                    <div className="inputSearchContainer">
                        <input 
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={(e) => setInputSearch(true) }
                            type="text" 
                            value={input} 
                            placeholder="Search"
                        />
                    </div>
                    <div className="searchIconFixed">
                      <button onSubmit={(e) => submitHandler()}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </SearchContainer>
		</FormStyle>
	)
}

export default Search