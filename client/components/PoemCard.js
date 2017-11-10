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

class PoemCard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const poemData = [
      {
          id: 1,
          title: 'Old Man',
          createdAt: '2017-11-09T20:28:54.970Z',
          updatedAt: '2017-11-09T20:28:54.970Z',
          lines: [
              {
                  id: 5,
                  text: 'Have all built their nests in my beard!',
                  spot: 4,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 1
              },
              {
                  id: 4,
                  text: 'Four Larks and a Wren',
                  spot: 3,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 1
              },
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
      },
      {
          id: 2,
          title: 'Young Lady',
          createdAt: '2017-11-09T20:28:54.970Z',
          updatedAt: '2017-11-09T20:28:54.970Z',
          lines: [
              {
                  id: 10,
                  text: 'That she very soon went back to Dorking.',
                  spot: 4,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 2
              },
              {
                  id: 9,
                  text: 'So bedazzled her eyes',
                  spot: 3,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 2
              },
              {
                  id: 8,
                  text: 'But its colour and size',
                  spot: 2,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 2
              },
              {
                  id: 7,
                  text: 'Who bought a large bonnet for walking',
                  spot: 1,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 2
              },
              {
                  id: 6,
                  text: 'There was a Young Lady of Dorking,',
                  spot: 0,
                  createdAt: '2017-11-09T20:28:54.975Z',
                  updatedAt: '2017-11-09T20:28:54.975Z',
                  poemId: 2
              }
          ]
      }
    ]
    const poem = poemData[0]
    const bPoem = poemData[1]
    const aSortedLines = poem.lines.sort(function(a, b){
      return a.spot - b.spot
    })
    const bSortedLines = bPoem.lines.sort(function(a, b) {
      return a.spot - b.spot
    })
    const poems = [poem, bPoem]
    return (
      poems.map(poem => (
      <Card key={poem.title}>
      <CardHeader

        //avatar={something here}
      />

      <CardTitle title={poem.title} subtitle={poem.createdAt.slice(0, 10)} />
      <CardText>
      <List>
      {aSortedLines.map(line => (
        <ListItem key={line.text} disabled={true}> {line.text} </ListItem>
      ))}
      </List>

      </CardText>
      <CardActions>
        {aSortedLines.map(line => (
          <RaisedButton primary key={`${line.text}${line.spot}`} onClick={() => console.log(line.spot + 1)}>{line.spot + 1}</RaisedButton>
        ))}
        <ActionFavorite onClick={() => console.log('favorite')} />

      </CardActions>
    </Card>)
      ))
  }
}

export default withRouter(connect()(PoemCard))
