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
    const poem = this.props.poem

    return (

      <Card >
      <CardHeader

        //avatar={something here}
      />

      <CardTitle title={poem.title} subtitle={poem.createdAt.slice(0, 10)} />
      <CardText>
      <List>
      {poem.lines.map(line => (
        <ListItem key={`${line.text}${line.id}`} disabled={true} > {line.text} </ListItem>
      ))}
      </List>

      </CardText>
      <CardActions>
        {poem.lines.map(line => (
          <RaisedButton primary key={`${line.text}${line.spot}`} onClick={() => console.log(line.spot + 1)}>{line.spot + 1}</RaisedButton>
        ))}
        <ActionFavorite onClick={() => console.log('favorite')} />

      </CardActions>
    </Card>)

  }
}



export default withRouter(connect()(PoemCard))
