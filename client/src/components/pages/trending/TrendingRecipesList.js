import React from 'react'
import PropTypes from 'prop-types'
import TrendingRecipesCard from './TrendingRecipesCard'

const style = {
  container: {
    paddingTop: 20,
    backgroundColor: '#ffd84c',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
}

const TrendingRecipesList = ({ trendingRecipes }) =>
  <div style={style.container}>
    {
      trendingRecipes.map((recipe, index) =>
        <TrendingRecipesCard key={index} recipe={recipe} />
      )
    }
  </div>

TrendingRecipesList.propTypes = {
  trendingRecipes: PropTypes.array.isRequired
}

export default TrendingRecipesList
