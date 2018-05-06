import React, { Component } from 'react'

import './posts.scss'
import Create from './../../components/create'

class Posts extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Create />
      </div >
    )
  }
}


export default Posts
