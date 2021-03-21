import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoryChoice } from '../redux/action'
import { Dropdown, Menu } from 'semantic-ui-react'

class FilterByCategory extends Component {

    // Makes GET fetch request
    componentDidMount = () => {
        this.props.fetchCategories()
    }

    // This function is rendering all of the categories for each article
    renderArticleCategory = () => {
        return this.props.category_choices.map(category => <option key={category.id} value={category.name}> {category.name}</option>)
    }

    render() {
        return (
            <select className="filter-input" onChange={this.props.categoryOnChange} >
                <option value="">Select Category</option>
                {this.renderArticleCategory()}
            </select>
        )
    }
}

const mapStateToProps = (state) => {
    return { category_choices: state.category_choices}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategoryChoice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory)