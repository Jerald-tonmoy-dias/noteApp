import React, { useEffect } from 'react'
import Notes from '../components/note/Notes'
import CreateNotes from '../components/note/CreateNotes'
import UpdateNotes from '../components/note/UpdateNotes'
import notesStore from '../stores/notesStore';
import authStore from '../stores/authStore';

export default function NotePage() {
  ////////////////////  global store  /////////////////////////
  const store = notesStore();
  const auth_store = authStore();

  // useffect
  useEffect(() => {
    store.fectNotesFunc();
    auth_store.getProfile();
    return () => {
      store.fectNotesFunc();
      auth_store.getProfile();
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
