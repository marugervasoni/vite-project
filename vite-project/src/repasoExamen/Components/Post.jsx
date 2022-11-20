import React from 'react'
import { useState } from 'react'


const Post = ({likear}) => {
    const [likes, setLikes] = useState(0)
  return (
    <div>
        <h1>Post</h1>
        <button onClick={() =>{likear(); setLikes(likes + 1)}}>Like</button>
    </div>
  )
}

export default Post