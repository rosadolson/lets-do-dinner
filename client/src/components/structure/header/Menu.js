import React from 'react'
import Drawer from 'material-ui/Drawer'
// import ActionAndroid from 'material-ui/svg-icons/action/android'
import AppBar from 'material-ui/AppBar'
import NavItem from './NavItem'
import IconButton from 'material-ui/IconButton'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '3px red'
  },
  background: {
    color: 'red'
  },
  menu: {
    fontFamily: 'Parisienne',
    fontSize: 50
  }
}

export default class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

    handleToggle = () => this.setState({open: !this.state.open})

    handleClose = () => this.setState({open: false})

    render () {
      return (
        <div style={styles.background} >
          <div>
            <div>
              <IconButton iconClassName='fas fa-bars' onClick={this.handleToggle} />
            </div>
            <Drawer
              containerStyle={{height: 'calc(100% - 64px)', top: 64}}
              docked
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})
              }
            >
              <AppBar style={styles.menu} title='Menu'onClick={this.handleToggle} />
              <nav style={styles.container} >
                <NavItem exact to='/'>  Home </NavItem>
                <NavItem to='/about'> About </NavItem>
                <NavItem to='/trending-recipes'> Trending </NavItem>
                <NavItem to='/top-rated'> Top Rated </NavItem>
                <NavItem to='/ingredient-search'> Ingredient Search </NavItem>
              </nav>
            </Drawer>
          </div>
        </div>
      )
    }
}
