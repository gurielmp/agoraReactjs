import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = ''
const ACCESS_TOKEN = ''

const clinet = contentful.createClient({
 space: SPACE_ID,
 token: ACCESS_TOKEN
})

class CourseList extends Component {
 state = {
  courses: [],
  searchString: ''
 }

 constructor(){
  super()
  this.getCourses()
 }
}