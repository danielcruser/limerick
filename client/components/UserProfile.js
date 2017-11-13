import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProfileThunk} from '../store/profile'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
class UserProfile extends Component  {
  constructor(){
    super()
  }
  componentDidMount() {
    if (this.props.loading) {
       this.props.fetchProfile(this.props.match.params.id)
    }
  }
  render(){
  const {profile, loading} = this.props


    return (
    (loading ) ?

     <div> Loading</div> :
    <div>
      <h3>{profile.email.split('@')[0]}'s profile</h3>
      <List>
      {profile.lines.map(line => (
        <ListItem key={line.text + line.spot}><Link to={`/poems/${line.poemId}`}>{line.text}</Link></ListItem>
      ))}
      </List>
    </div>
  )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    profile: state.profile.userProfile,
    loading: state.profile.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (id) => {
    return dispatch(fetchProfileThunk(id))
  }
})
export default connect(mapState, mapDispatchToProps)(UserProfile)

/**
 * PROP TYPES
 */

