import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import TrendingRecipesContainer from '../pages/trending/TrendingRecipesContainer'
import TopRatedContainer from '../pages/topRated/TopRatedContainer'
import IngredientSearchContainer from '../pages/ingredientSearch/IngredientSearchContainer'

const style = {
  container: {
    backgroundColor: 'white'
  }
}

const Main = () =>
  <div style={style.container}>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/trending-recipes' component={TrendingRecipesContainer} />
    <Route path='/top-rated' component={TopRatedContainer} />
    <Route path='/ingredient-search' component={IngredientSearchContainer} />
  </div>

export default Main
