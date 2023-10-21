import React from 'react'
import notesStore from '../stores/notesStore';

export default function UpdateNotes() {
  const store = notesStore();
  return (
    <div className=''>
      <h4 className='text-center font-bold uppercase'>update note</h4>
      <div className='shadow py-10'>
        <form onSubmit={store.updateNotesFunc} className='flex flex-col gap-4 justify-center items-center'>
          <input
            value={store.updateFormData.title}
            onChange={store.onUpdateChange}
            className='border p-4 rounded-md w-96'
            name='title' type="text" placeholder='Title' />
          <textarea
            value={store.updateFormData.body}
            onChange={store.onUpdateChange}
            className='border  p-4 rounded-md w-96'
            name="body" id="" rows="5" placeholder='Description'>
          </textarea>
          <button
            type='submit'
            className='px-4 py-1 w-96 font-bold text-center uppercase bg-blue-600 rounded-md text-white'>
            update note
          </button>
        </form>

      </div>
    </div>
  )
}
