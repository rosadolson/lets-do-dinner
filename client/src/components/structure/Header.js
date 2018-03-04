import React from 'react'
import './styles.css'

const style = {
  container: {
    backgroundColor: 'white',
    borderBottom: '2px solid black',
    paddingTop: 10,
    marginBottom: -70

  },
  h1: {
    fontFamily: 'oswald',
    fontSize: 80,
    marginTop: -15,
    paddingBottom: 20,
    letterSpacing: 4
  },
  p: {
    fontFamily: 'Parisienne',
    fontSize: 60,
    paddingTop: 10,
    margin: -5

  },
  img: {
    height: '300px',
    width: '100%'
    // opacity:0.9
  }
}

const Header = () => {
  return (
    <div className='container'>
      <header style={style.container} >
        <img style={style.img} src='https://image.freepik.com/free-photo/wooden-board-empty-table-top-on-of-blurred-background_1253-1584.jpg' />
        <p className='centered' style={style.p}> Let's </p>
        <h1 className='centeredTwo'style={style.h1}> Do Dinner! </h1>
      </header>
    </div>
  )
}

export default Header
