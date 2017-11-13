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
import FontIcon from 'material-ui/FontIcon'
class BuildPoem extends Component {
  constructor(){
    super()
    this.filterUnfinishedPoems = this.filterUnfinishedPoems.bind(this)
    this.sortLines = this.sortLines.bind(this)
    this.hideHiddenLines = this.hideHiddenLines.bind(this)
    this.showPreviousLine = this.showPreviousLine.bind(this)
  }
  componentDidMount(){

  }

  filterUnfinishedPoems(poems){
    const finishedPoems = poems.filter(poem => (poem.lines ? poem.lines.length < 5 : false))
    return finishedPoems
  }

  sortLines(poem){
    const lines = poem.lines.sort((a, b) => a.spot > b.spot)
    return lines
  }
  hideHiddenLines(lines){

    const hiddenLines = lines.slice(0, -1)
    return hiddenLines.map(line => (
      <ListItem key={line.text} disabled> Line {line.spot + 1} is hidden until the poem is complete! </ListItem>
    ))
  }
  showPreviousLine(lines){
    const previousLine = lines.pop()
    return (
      <ListItem disabled> {previousLine.text} </ListItem>
    )

  }
  render(){

    const poems = this.props.poems
    const unFinishedPoems = this.filterUnfinishedPoems(poems)

    const randomNumber = Math.floor(Math.random() * unFinishedPoems.length)
    const poemToBuild = unFinishedPoems[randomNumber]
    const user = this.props.user


    return (

      (poemToBuild )   ?

      <Card>
      <CardTitle title={poemToBuild.lines.length ? 'Hidden Title': poemToBuild.title }/>
       {<List>
          {poemToBuild.lines.sort((a, b) => a.spot > b.spot).slice(0, -1)
            .map(line => (
            <ListItem key={line.text} disabled> Line {line.spot + 1} is hidden until the poem is complete! </ListItem>
          ))}
          {poemToBuild.lines.sort((a, b) => a.spot > b.spot).slice(-1)
            .map(line => (
            <ListItem key={line.text} disabled> {line.text}</ListItem>
          ))}
        </List>}
        {/*console.log('lines', lines)}
        {this.hideHiddenLines(lines)}
        {this.showPreviousLine(lines)*/}
        <form onSubmit={(event) => {
          event.preventDefault()

          this.props.postLine(event.target.newLine.value, poemToBuild.id, poemToBuild.lines.length, user.id)
          }} >
        <TextField
       // hintText="Hint Text"
        floatingLabelText="Add a Line!"
        floatingLabelFixed={true}

        name="newLine"
      />
      <button type='submit' >
          Submit
      </button>
      </form>
      </Card> : <div>no poems :(   ... go create one :)</div>
    )
  }

}

const mapStateToProps = state => {
  return {
    poems: state.poems.allPoems,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  postLine: (text, poemId, spot, userId) => {
    return dispatch(postLineThunk(text, poemId, spot, userId))
  }

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuildPoem))
