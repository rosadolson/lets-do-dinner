import React from 'react'

const styles = {
  container: {
    banckground: '#ffc9db',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overFlow: 'hidden',
    backgroundImage: 'linear-gradient(to right bottom, #ffc9db, #ffc1c4, #ffbf9f, #ffc874, #ffd84c)',
    textAlign: 'center'
  },
  p: {
    fontSize: 55,
    fontFamily: 'Oswald',
    color: '#ECF0F1',
    textShadow: '0px 1px 2px grey',
    letterSpacing: '8px',
    borderBottom: '5px solid #ECF0F1'
  },
  image: {
    opacity: '0.1',
    maxWidth: '100%',
    height: 'auto'
  },
  text: {
    position: 'absolute',
    top: '80%',
    paddingLeft: '10%',
    paddingRight: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    height: 'auto'
  },
  about: {
    // display: 'block',
    fontSize: '20px',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.4)',
    fontFamily: 'quicksand',
    backgroundColor: '#ECF0F1',
    marginTop: '-40',
    marginBottom: '-40',
    color: 'black',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  },
  contact: {
    // display: 'block-flex',
    alignItems: 'center',
    fontSize: '20px',
    borderRadius: '10px',
    textWeight: 'bold',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.4)',
    fontFamily: 'quicksand',
    backgroundColor: '#ECF0F1',
    marginTop: '-40',
    marginBottom: '-40',
    color: 'black',
    paddingTop: '3',
    paddingBottom: '3',
    paddingLeft: '3',
    paddingRight: '3'
  },
  list: {

  }
}

const About = () =>
  <div style={styles.container} >
    <div style={styles.all} >
      {/* <div style={styles.image} > */}
      <img style={styles.image} alt='' src='https://img.domino.com/serve/literally-just-photos-of-really-organized-refrigerators-how-to-organize-refrigerator-fridge-full-of-produce-57c5df1581c866970ee84421-w1000_h1000.jpg' />
      {/* </div> */}
      <div style={styles.text}>
        <h3 style={styles.p}>ABOUT</h3>
        <div style={styles.about} >
          <p>Food2Fork is an online database of socially ranked recipes with ingredient search functionality. The Food2Fork API provides programmer access to ingredient searches. The API supports GET and POST calls over HTTP. Responses are JSON formatted.</p>
        </div>
        <h3 style={styles.p}>CONTACT</h3>
        <div style={styles.contact} >
          <p>For user support, media inquiries, or feedback please use one of the following email addresses:</p>
          <ul>
            <li>User Support: support@food2fork.com</li>
            <li>Media: media@food2fork.com</li>
            <li>Feedback: feedback@food2fork.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

export default About
