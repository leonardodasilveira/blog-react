import React from 'react'

import './post.scss'

const Post = (props) => {
  return (
    <div className="row">
      <div className="card">
        <h2>{props.title}</h2>
        <h5>{props.author}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Post