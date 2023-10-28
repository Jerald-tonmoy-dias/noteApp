import React, { useEffect } from 'react'
import Notes from '../components/note/Notes'
import CreateNotes from '../components/note/CreateNotes'
import UpdateNotes from '../components/note/UpdateNotes'
import notesStore from '../stores/notesStore';

export default function NotePage() {
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
      {store.updateFormData._id === null ?
        <CreateNotes /> : <UpdateNotes />}
    </div>
  )
}
