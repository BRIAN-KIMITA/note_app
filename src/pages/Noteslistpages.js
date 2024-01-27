import React , {useState, useEffect} from 'react'
import Listitem from '../components/Listitem'

const Noteslistpages = () => {

    let [notes, setNotes] = useState ([])

    useEffect( () => {
     getNotes()
    }, [])

    let getNotes = async () => {
      let response = await fetch(`/api/notes/`)
      let data = await response.json()
      setNotes(data)
    }
  return (
    <div className='notes-list'>
      {notes.map((note, index) => (
        <Listitem key={index} note={note}/>
      ))}
    </div>
  )
}

export default Noteslistpages
