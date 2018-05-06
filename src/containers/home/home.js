import React, { Component } from 'react'

import './home.scss'
import Post from './../../components/post'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor venenatis posuere. Nullam ultricies enim risus, suscipit lacinia sapien accumsan quis. Proin congue in augue eu commodo. Vivamus sodales, tortor et ornare mattis, diam enim efficitur turpis, quis lacinia ipsum est nec lacus. Donec sed purus dictum, pulvinar est ut, aliquam tellus. Sed sed erat non erat volutpat tristique ut at metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris lobortis eget metus et porttitor. Praesent nec aliquam nibh, vitae mollis felis.'
    return (
      <div>
        <Post title='titulo' author='leonardo' content={content}/>
      </div>
    )
  }
}

export default Home