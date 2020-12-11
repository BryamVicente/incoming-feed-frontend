import React, { Component } from 'react'
import { Article } from '../Components/Article'
import FilterByCategory from '../Components/FilterByCategory'
import Search from '../Components/Search'

export default class ArticleContainer extends Component {
    render() {
        return (
            <>
                <FilterByCategory/>
                <Article />
                <Search /> 
            </>
        )
    }
}
