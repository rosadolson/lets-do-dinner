import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'

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
    borderTopRadius: 5
  },
  image: {
    maxWidth: '100%'
  },
  cardOne: {
    backgroundColor: 'red',
    display: 'grid',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15
  },
  h1: {
    textAlign: 'center',
    fontSize: 20
  },
  card: {
    maxWidth: 345
  },
  link: {
    textDecoration: 'none',
    color: '#DADFE1',
    padding: 10,
    fontSize: 15,
    border: '1px solid #DADFE1',
    borderRadius: 3,
    margin: 15
  }

}

const TopRatedCard = ({ recipe }) =>
  <div style={styles.cardOne}>
    <Card styles={styles.card}>
      <div style={styles.container}>
        <p style={styles.h1}> {recipe.title}</p>
        <p>Rank:{recipe.social_rank}</p>
        <div style={styles.link}><a href={recipe.f2f_url}>View Recipe</a></div>
        <img style={styles.image} alt='' src={recipe.image_url} />
      </div>
    </Card>
  </div>

TopRatedCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default TopRatedCard
