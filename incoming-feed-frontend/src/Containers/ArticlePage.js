import React, { Component } from 'react'
import Favorite from './Favorite'
import ArticleContainer from './ArticleContainer'

export default class ArticlePage extends Component {
    render() {
        return (
            <>
            <Favorite />
            <ArticleContainer />
                
            </>
        )
    }
}
