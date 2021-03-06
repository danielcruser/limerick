import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Home} from './index.js'
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { brown100, blueGrey400, redA100, grey900, blueGrey300, brown300, cyan50, red600, black }from 'material-ui/styles/colors'
import { Paper } from 'material-ui';
import Chip from 'material-ui/Chip'

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
    primary1Color: blueGrey300,
    canvasColor: brown300,
    Avatar: black

  },
  appBar: {
    height: 50,
  },
});
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn, user} = props

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
    <Paper rounded={false}>
      <h1>Limerick</h1>

      <nav>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}

              <Link to="/">Home</Link>
              <Link to="/build">Build</Link>
              <Link to="/create"> New</Link>
              <a href="#" onClick={handleClick}>Logout</a>



              {/*<Badge
              <Link to="/profile">
              badgeContent={user.id}
              secondary={true}
              <IconButton tooltip="Finished Poems">*/}
              <Chip style={{backgroundColor: 'white', color: 'black', display: 'inline-block'}}>{user.email.split('@')[0]}</Chip>
              {/*</IconButton>
              </Badge>
              </Link>
            >*/}
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
        }

      </nav>
      <hr />
      {children}
    </Paper>
    </MuiThemeProvider>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user || {}
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
