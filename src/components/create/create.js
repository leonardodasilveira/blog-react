import React from 'react'

import './create.scss'

const Create = () => {
  return (
    <div className='card'>
      <div className='post-box'>
        <p>Titulo: <input /></p>
        <p>Autor: <input /></p>
        <p>Conteúdo: <textarea rows="4" cols="50" /></p>
        <button>Postar</button>
      </div>
    </div>
  )
}
export default Create