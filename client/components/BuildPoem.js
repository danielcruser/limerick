import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import store from '../store';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import  Avatar  from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import { ActionFavorite, ActionAccessibility } from 'material-ui/svg-icons';

class BuildPoem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const poem = {
      id: 1,
      title: 'Old Man',
      createdAt: '2017-11-09T20:28:54.970Z',
      updatedAt: '2017-11-09T20:28:54.970Z',
      lines: [
          {
              id: 3,
              text: 'Two Owls and a Hen',
              spot: 2,
              createdAt: '2017-11-09T20:28:54.975Z',
              updatedAt: '2017-11-09T20:28:54.975Z',
              poemId: 1
          },
          {
              id: 2,
              text: "Who said, 'It is just as I feared!",
              spot: 1,
              createdAt: '2017-11-09T20:28:54.975Z',
              updatedAt: '2017-11-09T20:28:54.975Z',
              poemId: 1
          },
          {
              id: 1,
              text: 'There was an Old Man with a beard',
              spot: 0,
              createdAt: '2017-11-09T20:28:54.975Z',
              updatedAt: '2017-11-09T20:28:54.975Z',
              poemId: 1
          }
      ]
  }
    const sortedLines = poem.lines.sort(function(a, b){
      return a.spot - b.spot
    })
    const lastLine = sortedLines[-1]
    console.log(sortedLines, lastLine)
    return (
      <Card key={poem.title}>
      <CardTitle title ="Add Your Line" />

      </Card>
    )
  }

}

export default withRouter(connect()(BuildPoem))
