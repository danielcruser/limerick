import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import {PoemCard} from './index'
import {Card, CardText} from 'material-ui/Card'
import {fetchPoems} from '../store/poems'
class Home extends Component {
  constructor(){
    super()
    this.filterFinishedPoems = this.filterFinishedPoems.bind(this)
  }

  filterFinishedPoems(poems){
    const finishedPoems = poems.filter(poem => poem.lines.length == 5)
    return finishedPoems
  }
  render(){

    const poems = this.props.poems
    const finishedPoems = this.filterFinishedPoems(poems)
    const loggedInUser = this.props.user.id
    return (

      <div>
          {finishedPoems && finishedPoems.map(poem => <PoemCard key={`${poem.title}${poem.id}`} poem={poem} loggedInUser={loggedInUser} />)
          }



      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    poems: state.poems.allPoems,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoems: dispatch(fetchPoems())

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
