import React, {Component} from 'react'
import TrendingRecipesList from './TrendingRecipesList'

class TrendingRecipesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trendingRecipes: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    fetch('http://www.food2fork.com/api/search?key=8defee2e32595ca866a94f526f42c9e6&sort=t')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      })
      .then(data => this.setState({ trendingRecipes: data.recipes, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render () {
    const { isLoading, error } = this.state
    if (error) {
      return <p>{error.message}</p>
    }
    if (isLoading) {
      return <p>Loading ...</p>
    }
    return (
      <div>
        <TrendingRecipesList trendingRecipes={this.state.trendingRecipes} />
      </div>
    )
  }
}

export default TrendingRecipesContainer
