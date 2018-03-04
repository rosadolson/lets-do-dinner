import React from 'react'
import './style.css'

const style = {
  containerOne: {
    backgroundColor: 'white',
    borderBottom: '3px solid #ffd84c',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    fontFamily: 'Quicksand'
  },
  containerTwo: {
    backgroundColor: 'black',
    borderBottom: '3px solid #87fffb',
    marginTop: 10,
    marginBottom: 100,
    padding: 20,
    margin: 40,
    fontFamily: 'Quicksand',
    position: 'relative',
    textAlign: 'center'
  },
  containerThree: {
    borderBottom: '3px solid #aee26f',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 40,
    fontFamily: 'Quicksand',
    maWidth: '10%',
    paddingRight: 30

  },
  h1: {
    fontFamily: 'Quicksand',
    fontSize: 45,
    marginTop: -10,
    marginBottom: -2
  },
  h2: {
    fontFamily: 'Quicksand',
    backgroundColor: '#aee26f'
  },
  h3: {
    backgroundColor: '#87fffb'
  },
  img: {
    width: '30%'
  },
  imgTwo: {
    width: '30%',
    borderRadius: 5
  }
}

const Home = () =>
  <div className='img' >
    <div >
      <div style={style.containerOne}>
        <h1 style={style.h1}> Welcome </h1>
        <p> Lets Do Dinner is a mobile app and website that provides recipe recommendations personalized to the individuals tastes, semantic recipe search. The Lets Get Dinner App was made to take thinking of what to make for dinner each night something to look forward to, and simple expieriece to our customers.</p>
      </div>

      <div style={style.containerThree}>
        <img style={style.imgTwo}src='https://pune365.com/wp-content/uploads/2017/02/30287438_l.jpg' />
        <img src='http://moziru.com/images/plate-clipart-dining-7.png' />
        <img style={style.imgTwo} src='https://pune365.com/wp-content/uploads/2017/02/30287438_l.jpg' />
      </div>

      <div style={style.containerTwo}>
        <h1 className='centered'> Get Started! </h1>
        <p className='p'> See Trending Rated Recipes </p>
        <p className='p2'> Ingredient Search </p>
        <p className='p3'> See Top Rated Recipes  </p>
      </div>

    </div>
  </div>

export default Home
