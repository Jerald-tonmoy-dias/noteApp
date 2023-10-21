import React from 'react'
import notesStore from '../stores/notesStore'

export default function Notes() {

  const store = notesStore();
  return (
    <div className='shadow w-full px-4'>
      <h1 className='uppercase font-bold text-center mb-4'>notes</h1>
      <div className='grid grid-cols-3 gap-4'>
        {store.notes && store.notes.map((note) => {
          return <div key={note._id} className='flex flex-col gap-4 shadow p-8 mb-4 border rounded'>
            <div className='flex uppercase gap-4'>
              <h4 className='font-bold'>title: </h4>
              <h4>{note.title}</h4>
            </div>
            <div className='uppercase gap-4'>
              <h4 className='font-bold'>description: </h4>
              <h4>{note.body}</h4>
            </div>
            <div className='flex uppercase gap-4'>
              <button
                onClick={() => store.toggleEditMode(note)}
                className='px-4 py-1 text-center uppercase bg-green-400 rounded-md text-white'>edit</button>
              <button
                onClick={() => store.deleteNotesFunc(note._id)}
                className='px-4 py-1 text-center uppercase bg-red-400 rounded-md text-white'>delete</button>
            </div>
          </div>
        })}

        {!store.notes && <h4>No data found!!</h4>}
      </div>
    </div>
  )
}
