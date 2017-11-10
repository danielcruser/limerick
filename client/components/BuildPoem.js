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
import { ActionFavorite, ActionAccessibility, ContentAdd } from 'material-ui/svg-icons';
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {postLineThunk} from '../store/lines'
import {fetchPoems} from '../store/poems'
class BuildPoem extends Component {
  constructor(){
    super()
    this.filterUnfinishedPoems = this.filterUnfinishedPoems.bind(this)
  }
  componentDidMount(){

  }

  filterUnfinishedPoems(poems){
    const finishedPoems = poems.filter(poem => poem.lines.length < 5)
    return finishedPoems
  }

  render(){

    const poems = this.props.poems
    const unFinishedPoems = this.filterUnfinishedPoems(poems)

    const randomNumber = Math.floor(Math.random() * unFinishedPoems.length)
    const poemToBuild = unFinishedPoems[randomNumber]

    console.log('postline', this.props.postLine)
    return (

      poemToBuild ?
      <Card>
      <CardTitle title={poemToBuild.lines.length ? 'Hidden Title': poemToBuild.title }/>
        <List>
          {poemToBuild.lines.sort((a, b) => a.spot > b.spot).slice(0, -1)
            .map(line => (
            <ListItem key={line.text} disabled> Line {line.spot + 1} is hidden until the poem is complete! </ListItem>
          ))}
          {poemToBuild.lines.sort((a, b) => a.spot > b.spot).slice(-1)
            .map(line => (
            <ListItem key={line.text} disabled> {line.text}</ListItem>
          ))}
        </List>
        <form onSubmit={(event) => {
          event.preventDefault()

          this.props.postLine(event.target.newLine.value, poemToBuild.id, poemToBuild.lines.length)
          console.log(event.target.newLine.value)}} >
        <TextField
       // hintText="Hint Text"
        floatingLabelText="Add a Line!"
        floatingLabelFixed={true}

        name="newLine"
      />
      <FloatingActionButton type='submit' >

      </FloatingActionButton>
      </form>
      </Card> : <div>no poems :(   ... go create one :)</div>
    )
  }

}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    poems: state.poems.allPoems
  }
}

const mapDispatchToProps = (dispatch) => ({
  postLine: (text, poemId, spot) => {
    return dispatch(postLineThunk(text, poemId, spot))
  }

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuildPoem))