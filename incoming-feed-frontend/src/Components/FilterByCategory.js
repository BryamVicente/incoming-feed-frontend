import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoryChoice } from '../redux/action'

class FilterByCategory extends Component {

    componentDidMount = () => {
        this.props.fetchCategories()
    }

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