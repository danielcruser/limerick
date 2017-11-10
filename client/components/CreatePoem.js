import TextField from 'material-ui/TextField'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import store from '../store';
import {postPoemThunk} from '../store/poems'
import RaisedButton from 'material-ui/RaisedButton'

class CreatePoem extends Component {
  constructor(){
    super()
  }



  render(){
    return (
      <form onSubmit={(event)=>{
        event.preventDefault()
        this.props.postPoem(event.target.newPoem.value)
      }}>
  <div>
  <TextField name="newPoem"

  floatingLabelText="Submit A title!"
  />
  <RaisedButton type='submit' label="Primary" primary={true}>Submit</RaisedButton>
  </div>
  </form>
  )
  }

}

const MapDispatchToProps = (dispatch) => ({
  postPoem: (title) => {
    return dispatch(postPoemThunk(title))
  }
})

export default withRouter(connect(null, MapDispatchToProps)(CreatePoem))
