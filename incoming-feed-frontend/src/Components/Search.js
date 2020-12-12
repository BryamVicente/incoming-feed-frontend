import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class Search extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <Input icon="search" type="text" placeholder="Search by title.." value={this.props.searchValue} onChange={this.props.searchHandler} />
            </div>
        )
    }
}
