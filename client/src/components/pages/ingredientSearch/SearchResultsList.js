import React from 'react'
import PropTypes from 'prop-types'
import SearchResultsCard from './SearchResultsCard'

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const TopRatedList = ({ results }) =>
  <div style={style.container}>
    {
      results.map((recipe, index) =>
        <SearchResultsCard key={index} recipe={recipe} />
      )
    }
  </div>

TopRatedList.propTypes = {
  results: PropTypes.array.isRequired
}

export default TopRatedList
