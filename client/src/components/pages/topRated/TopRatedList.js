import React from 'react'
import PropTypes from 'prop-types'
import TopRatedCard from './TopRatedCard'

const style = {
  container: {
    paddingTop: 25,
    paddingBottom: 10,
    marginBottom: 5,
    backgroundColor: '#ffc9db',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    border: '1px solid black'
  }
}

const TopRatedList = ({ topRatedRecipes }) =>
  <div style={style.container}>

    {
      topRatedRecipes.map((recipe, index) =>
        <TopRatedCard key={index} recipe={recipe} />
      )
    }
  </div>

TopRatedList.propTypes = {
  topRatedRecipes: PropTypes.array.isRequired
}

export default TopRatedList
