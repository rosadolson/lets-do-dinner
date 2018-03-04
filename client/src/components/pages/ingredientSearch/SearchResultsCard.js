import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    padding: 25,
    flexDirection: 'column',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 345,
    display: 'grid',
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    WebkitBoxSizing: 'border-box',
    borderTopRadius: 5,
    backgroundColor: '#2d3436',
    borderRadius: 10
  },
  image: {
    maxWidth: '100%'
  },
  link: {
    textDecoration: 'none',
    color: '#DADFE1',
    padding: 10,
    fontSize: 12
  },
  linkDiv: {
    borderRadius: 3,
    border: '1px solid #DADFE1',
    margin: 15
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: '#DADFE1',
    marginBottom: 0
  }
}

const SearchResultsCard = ({ recipe }) =>
  <div style={styles.container}>
    <p style={styles.header}>{recipe.title}</p>
    <div style={styles.linkDiv}><a style={styles.link} href={recipe.f2f_url}>View Recipe</a></div>
    <img style={styles.image} alt='' src={recipe.image_url} />
  </div>

SearchResultsCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default SearchResultsCard
