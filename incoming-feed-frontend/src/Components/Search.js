import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = (props) => {

    return (
        <div className="search-input">
            <Input icon="search" type="text" placeholder="Search by title.." value={props.searchValue} onChange={props.searchHandler} />
        </div>
    )
}

export default Search;