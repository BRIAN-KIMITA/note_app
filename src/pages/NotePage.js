import React , {useState, useEffect}from 'react'

const NotePage = ({ match }) => {
    let noteId = match.params.id 
    let [note, setNotes] = useState (null)

    useEffect ( ()=>{
        getNote()
   
 },[noteId])
    let getNote = async ()=>{
  let response = await fetch(`/api/notes/${noteId}/`)
  let data = await response.json()
  setNotes(data) 
    }
  return (
    <div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NotePage
