import React from 'react'
import IconButton from 'material-ui/IconButton'

const styles = {
  container: {
    background: '#2d2d2d',
    // backgroundImage: 'url("https://www.transparenttextures.com/patterns/xv.png")'
    // backgroundImage: 'url("https://www.transparenttextures.com/patterns/concrete-wall-2.png")',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/rocky-wall.png")',
    display: 'flex',
    width: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: '20',
    paddingLeft: '10',
    paddingRight: '10',
    paddingBottom: '30',
    color: 'white',
    borderTop: '10px solid #3a3a3a',
    borderRadius: '3px',
    borderLeft: '5px solid #3a3a3a',
    borderRight: '5px solid #3a3a3a',
    borderBottom: '5px solid #3a3a3a',
    maxWidth: '100%'
  },
  first: {
    paddingLeft: '20',
    // paddingRight: '20',
    // background: 'black',
    fontFamily: 'quicksand'
  },
  two: {
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '10px',
    paddingTop: '10px'
  },
  three: {
    paddingRight: '20',
    paddingLeft: '20'
  },
  line: {
    borderBottom: '3px #ffd84c solid'
  },
  line2: {
    borderBottom: '3px #ffd84c solid',
    paddingTop: '5px',
    marginRight: '50px',
    marginLeft: '50px',
    opacity: '0.3'
  },
  line3: {
    borderBottom: '3px #ffd84c solid',
    paddingTop: '5px',
    marginRight: '100px',
    marginLeft: '100px',
    opacity: '0.2'
  },
  line4: {
    borderBottom: '3px #ffd84c solid',
    paddingTop: '5px',
    marginRight: '150px',
    marginLeft: '150px',
    opacity: '0.1'
  },
  vertical: {
    borderLeft: 'thick solid #87fffb',
    marginRight: '20px',
    marginLeft: '20px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)'
  },
  fafa: {
    color: 'white'
  },
  credit: {
    background: '#ffc9db',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    borderRadius: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: 'black',
    fontWeight: 'bold'
  }
}

const Footer = () =>
  <div style={styles.container} >
    <div style={styles.first} >
      <div style={styles.line}>
        <h3>
          Full-Stack MERN Web-Application Project for BSCA
        </h3>
      </div>
      <h3>Created by: </h3>
      <div style={styles.credit} >
        <p>
          <a href='https://github.com/LI05062017' target='_blank' rel='noopener noreferrer' >
            <IconButton iconClassName='fab fa-github' /></a>Lyndee Irish,
          <a href='https://github.com/rosadolson' target='_blank' rel='noopener noreferrer' >
            <IconButton iconClassName='fab fa-github-alt' style={styles.fafa} /></a>Rosa Dolson, and
          <a href='https://github.com/alguzman1' target='_blank' rel='noopener noreferrer' >
            <IconButton iconClassName='fab fa-github-square' style={styles.fafa} /></a>Tony Guzman
        </p>
      </div>
      <div style={styles.line}>
        {/* <img alt='' src='https://cicakcode.io/content/images/2017/11/mern-stack.png' /> */}
      </div>
      <div style={styles.line2}>
        {/* <img alt='' src='https://cicakcode.io/content/images/2017/11/mern-stack.png' /> */}
      </div>
      <div style={styles.line3}>
        {/* <img alt='' src='https://cicakcode.io/content/images/2017/11/mern-stack.png' /> */}
      </div>
      <div style={styles.line4}>
        {/* <img alt='' src='https://cicakcode.io/content/images/2017/11/mern-stack.png' /> */}
      </div>
    </div>
    <div style={styles.vertical}>
      {/* <p> */}
    </div>
    <div style={styles.two} >
      <a href='http://www.bigskycodeacademy.org/#intro' target='_blank' rel='noopener noreferrer' >
        <img alt='' src='http://www.bigskycodeacademy.org/wp-content/uploads/2017/02/BigSkyCodeAcademy.png' />
      </a>
      <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' >
        <img alt='' src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-128.png' />
      </a>
      <a href='https://nodejs.org/en/' target='_blank' rel='noopener noreferrer' >
        <img alt='' src='https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-128.png' />
      </a>
    </div>
  </div>

export default Footer
