import React from 'react'
import { Link } from 'react-router-dom'
const Listitem = ({ note }) => {
  return (
    <link to ={`/note/${note.id}`}>
    <h3>{note.body}</h3>
    </link>
  )
}

export default Listitem
