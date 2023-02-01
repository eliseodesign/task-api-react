import getNotes from "@/utils/services/getNotes"
import { useEffect, useState } from "react";
import Note from "./components/Note";
import Form from "./components/Form";
const App = () => {

  const [notes, setNotes] = useState([])
  useEffect(() => {

    getNotes().then((notes)=>{
      setNotes(notes)
      console.log(notes)
    })
  }, [])
  

  return ( 
    <div>
      <Form />
      {notes.map((note)=>(
        <Note 
          key={note.id}
          title={note.title}
          content={note.content}
          important={note.important}
        />
      ))
      }
    </div> 
    );
}
 
export default App;