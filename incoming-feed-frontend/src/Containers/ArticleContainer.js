import React, { Component } from 'react'
import  Article  from '../Components/Article'
import FilterByCategory from '../Components/FilterByCategory'
import Search from '../Components/Search'
import { connect } from 'react-redux'
import { getArticleFromApi } from '../redux/action'
import { Route, Switch } from 'react-router-dom'
import ArticleInfo from '../Components/ArticleInfo'
import {Grid} from 'semantic-ui-react'
import Weather from '../Components/Weather'

class ArticleContainer extends Component {
    state = {
        searchValue: "",
        selectedCategory: ""
    }

    // GET request to /articles 
    componentDidMount = () => {
        this.props.fetchArticles()
    }

    // This function is filtering the articles by their category 
    filteredArticlesByCategory = () => {
        return this.props.articles.filter(articles_obj => articles_obj.category_choice.name.includes(this.state.selectedCategory))
    }

    // This function is rendering all of the articles 
    renderArticles = () => {
        let filteredArray = this.filteredArticlesByCategory().filter(obj => obj.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(article => <Grid.Column key={article.id}><Article key={article.id} article={article} favoriteClickHandler={this.props.favoriteClickHandler} /></Grid.Column>)
    }

    // This function allows the user to search an artcle by its title
    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value})
    }

    categoryOnChange = (e) => {
        this.setState({ selectedCategory: e.target.value})
    }

    render() {
        console.log("article container: ", this.props)
        return (
            <>
                { this.props.articles.length === 0 ? 

                    <h1 className="loading"> Loading Articles...</h1>
                    :
                    <>
                        <Switch>
                            <Route path="/articles/:id" render={({match}) => {
                                let urlId = parseInt(match.params.id)
                                let foundArticle = this.props.articles.find(article => article.id === urlId)
                                return <ArticleInfo favoriteClickHandler={this.props.favoriteClickHandler} article={foundArticle} />
                            }}/>

                            <Route path="/articles" render={() => (
                                <>
                                    <br></br>
                                    <br></br>
                                    <Weather />
                                    <br></br>
                                    <FilterByCategory categoryOnChange={this.categoryOnChange}/>
                                    <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} /> 
                                    <Grid relaxed centered container columns={3}>
                                        {this.renderArticles()}
                                    </Grid>
                                </>
                            )}/>
                        </Switch>
                    </>
                }
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

export default connect(mapStateToProps, mapDispatchToProps) (ArticleContainer);






