import React, { Component } from 'react'
import  Article  from '../Components/Article'
import FilterByCategory from '../Components/FilterByCategory'
import Search from '../Components/Search'
import { connect } from 'react-redux'
import { getArticleFromApi } from '../redux/action'

class ArticleContainer extends Component {
    state = {
        searchValue: ""
    }

    componentDidMount = () => {
        return (
            this.props.fetchArticles()
        )
    }

    renderArticles = () => {
        let filteredArray = this.props.articles.filter(obj => obj.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(article => <Article key={article.id} article={article}/>)
    }

    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value})
    }

    render() {
        return (
            <>
                <FilterByCategory/>
                <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} /> 
                {this.renderArticles()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { articles: state.articles}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(getArticleFromApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)  (ArticleContainer);