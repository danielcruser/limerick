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
import {toggleFavoriteThunk} from '../store/favorite'
import FontIcon from 'material-ui/FontIcon'
import Chip from 'material-ui/Chip'
const iconStyles = {
  fontSize: '2.5em',

}

class PoemCard extends Component {
  constructor(props){
    super(props)
    const favorites = this.props.poem.users.filter(user => user.favorite.favorited == true).length
    this.state = {
      isUserFavorite: this.props.poem.users.filter(user => user.id === this.props.loggedInUser).filter(user => user.favorite.favorited === true).length === 1,
      favorites: favorites
    }
    this.sortLines = this.sortLines.bind(this)
    this.showAuthor = this.showAuthor.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.toggleUserFavorite = this.toggleUserFavorite.bind(this)
  }

  componentDidMount(){

  }
  sortLines(poem){
    const sortedLines = poem.lines.sort((a, b) => a.spot > b.spot)
    return sortedLines
  }
  showAuthor(line){
    const user = line.user
    const userName = user.email.split('@')[0]
    return userName
  }
  toggleUserFavorite(){
    this.state.isUserFavorite ? this.setState({
      favorites: this.state.favorites - 1
    }) : this.setState({
      favorites: this.state.favorites + 1
    })
    this.setState({
      isUserFavorite: !this.state.isUserFavorite
    })
  }

  handleFavoriteClick(poem){
    const userId = this.props.user.id
    const poemId = poem.id
    const favorite = {poemId, userId}
    this.props.toggleFavorite(favorite)
    console.log('state', this.state)
    this.toggleUserFavorite()
  }



  render(){
    const poem = this.props.poem
    const lines = this.sortLines(poem)
    const loggedInUser = this.props.loggedInUser
    const numFavorites = this.state.favorites
    const isUserFavorite = this.state.isUserFavorite
    console.log('state', this.state)
    return (
      <Card >
      <CardHeader

        //avatar={something here}
      />

      <CardTitle title={poem.title} subtitle={poem.createdAt.slice(0, 10)} subtitleStyle={{fontStyle: 'italic'}}/>
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
          <RaisedButton  primary>{this.showAuthor(line)}</RaisedButton>
          </Link>
        ))}
        <Avatar style={{backgroundColor: 'white', color: 'black'}}> {numFavorites} </Avatar>
        {this.props.user.id && (this.state.isUserFavorite ?
        <FontIcon onClick={() => this.handleFavoriteClick(poem)} className='material-icons' style={iconStyles} >favorite</FontIcon> :
        <FontIcon onClick={() => this.handleFavoriteClick(poem)} className='material-icons' style={iconStyles}>favorite_border</FontIcon>)

        }

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
  },
  toggleFavorite: favorite => dispatch(toggleFavoriteThunk(favorite))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PoemCard))
