import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        Home Page.
      </div>
    )
  }
}

export default withRouter(connect()(Home))
