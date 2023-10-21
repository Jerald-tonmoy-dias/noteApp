import React from 'react'
import notesStore from '../stores/notesStore';

export default function CreateNotes() {
  const store = notesStore();
  return (
    <div className=''>
      <h4 className='text-center font-bold uppercase'>create notes</h4>
      <div className='shadow py-10'>
        <form onSubmit={store.createNotesFunc} className='flex flex-col gap-4 justify-center items-center'>
          <input
            value={store.createFormData.title}
            onChange={store.handleOnChange}
            className='border p-4 rounded-md w-96'
            name='title' type="text" placeholder='Title' />
          <textarea
            value={store.createFormData.body}
            onChange={store.handleOnChange}
            className='border  p-4 rounded-md w-96'
            name="body" id="" rows="5" placeholder='Description'>
          </textarea>
          <button
            type='submit'
            className='px-4 py-1 w-96 font-bold text-center uppercase bg-blue-600 rounded-md text-white'>
            add note
          </button>
        </form>

      </div>
    </div>
  )
}
