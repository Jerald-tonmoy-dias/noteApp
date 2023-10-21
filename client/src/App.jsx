import { useEffect } from 'react'
import './App.css'
import notesStore from './stores/notesStore';
import Notes from './components/Notes';
import CreateNotes from './components/CreateNotes';
import UpdateNotes from './components/UpdateNotes';


function App() {
  ////////////////////  global store  /////////////////////////
  const store = notesStore();

  // useffect
  useEffect(() => {
    store.fectNotesFunc();
    return () => {
      store.fectNotesFunc();
    };
  }, [])

  return (
    <div className='flex flex-col gap-6 p-20'>
      <Notes />
      <hr />
      <CreateNotes />
      <hr />
      <UpdateNotes />
    </div>
  )
}

export default App
