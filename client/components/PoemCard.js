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
    this.sortLines = this.sortLines.bind(this)
    this.showAuthor = this.showAuthor.bind(this)
  }

  // this.handleClick (event){

  // }
  sortLines(poem){
    const sortedLines = poem.lines.sort((a, b) => a.spot > b.spot)
    return sortedLines
  }
  showAuthor(line){
    const user = line.user
    const userName = user.email.split('@')[0]
    return userName
  }

  render(){
    const poem = this.props.poem
    const lines = this.sortLines(poem)
    return (
      <Card >
      <CardHeader

        //avatar={something here}
      />

      <CardTitle title={poem.title} subtitle={poem.createdAt.slice(0, 10)} />
      <CardText>
      <List>
      {lines.map(line => console.log(line.text))}
      {lines.map(line => (
        <ListItem key={`${line.text}${line.id}`} disabled={true} > {line.text} </ListItem>
      ))}
      </List>

      </CardText>
      <CardActions>
        {lines.map(line => (
          <RaisedButton primary key={`${line.text}${line.spot}`} onClick={() => console.log(line.userId)}>{this.showAuthor(line)}</RaisedButton>
        ))}
        <ActionFavorite onClick={() => console.log('favorite')} />

      </CardActions>
    </Card>)

  }
}



export default withRouter(connect()(PoemCard))
