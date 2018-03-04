import React from 'react'
import Menu from './header/Menu'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'

const style = {
  container: {
    // backgroundColor: '#87fffb',
    textAlign: 'center',
    border: '1px sold black',
    margin: 5
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: -40
  }
}

const Layout = () => {
  return (
    <div style={style.container} >
      <Header />
      <div style={style.menu}>
        <Menu />
      </div>
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
