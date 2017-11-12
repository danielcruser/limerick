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
import {fetchProfileThunk} from '../store/profile'
class PoemCard extends Component {
  constructor(props){
    super(props)
    this.sortLines = this.sortLines.bind(this)
    this.showAuthor = this.showAuthor.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
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

  handleFavoriteClick(poem){
    const userId = this.props.user.id
    const poemId = poem.id
    console.log('favorited- object to send is: ', {
      poemId,
      userId
    })

  }



  render(){
    const poem = this.props.poem
    const lines = this.sortLines(poem)
    const favorites = poem.users.filter(user => user.favorite.favorited == true).length
    console.log('favorites', favorites)
    return (
      <Card >
      <CardHeader

        //avatar={something here}
      />

      <CardTitle title={poem.title} subtitle={poem.createdAt.slice(0, 10)} />
      <CardText>
      <List>

      {lines.map(line => (
        <ListItem key={`${line.text}${line.id}`} disabled={true} > {line.text} </ListItem>
      ))}
      </List>

      </CardText>
      <CardActions>
        {lines.map(line => (
          <Link to={`users/${line.userId}`} key={`${line.text}${line.spot}`} onClick={() => {

            this.props.fetchProfile(line.userId)}}>
          <RaisedButton  primary >{this.showAuthor(line)}</RaisedButton>
          </Link>
        ))}
        <Avatar> {favorites} </Avatar>
        <ActionFavorite onClick={() => this.handleFavoriteClick(poem)} />

      </CardActions>
    </Card>)

  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (id) => {
    return dispatch(fetchProfileThunk(id))
  }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PoemCard))
