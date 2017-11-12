import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, Home, BuildPoem, CreatePoem, UserProfile } from './components'
import {me} from './store'
import { fetchPoems } from './store/poems';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (

      <Router history={history}>
        <Main>

          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/:id" component={UserProfile} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/build" component={BuildPoem} />
                  <Route path="/create" component={CreatePoem} />
                  <Route path="/profile" component={UserProfile} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Home} />
          </Switch>

        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    poems: state.poems.allPoems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchPoems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
