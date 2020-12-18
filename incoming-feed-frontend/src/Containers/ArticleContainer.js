import React, { Component } from 'react'
import  Article  from '../Components/Article'
import FilterByCategory from '../Components/FilterByCategory'
import Search from '../Components/Search'
import { connect } from 'react-redux'
import { getArticleFromApi } from '../redux/action'
import { Route, Switch } from 'react-router-dom'
import ArticleInfo from '../Components/ArticleInfo'
// import { makeStyles } from '@material-ui/core/styles'
// import Pagination from '@material-ui/lab/Pagination'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }))


class ArticleContainer extends Component {
    state = {
        searchValue: ""
    }

    componentDidMount = () => {
        this.props.fetchArticles()
    }

    renderArticles = () => {
        let filteredArray = this.props.articles.filter(obj => obj.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(article => <Article key={article.id} article={article} favoriteClickHandler={this.props.favoriteClickHandler} />)
    }

    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value})
    }

    render() {
        // const classes = useStyles()
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
                                    <FilterByCategory/>
                                    <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} /> 
                                    {this.renderArticles()}
                                </>
                            )}/>
                        </Switch>

                        {/* <div className={classes.root}>
                            <Pagination count={5}/>
                            <Pagination count={5} color="primary"/>
                            <Pagination count={5} color="secondary" />
                            <Pagination count={5} color="disabled" />

                        </div> */}
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

