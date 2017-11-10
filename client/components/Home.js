import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import {PoemCard} from './index'
import {Card, CardText} from 'material-ui/Card'
class Home extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>

          <PoemCard />


      </div>
    )
  }
}

export default withRouter(connect()(Home))
