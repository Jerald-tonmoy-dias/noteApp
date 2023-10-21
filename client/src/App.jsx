import { useState, useEffect } from 'react'
import './App.css'
import { axiosInstance, endpoints } from './axios'


function App() {


  ////////////////////  states  /////////////////////////
  const [notes, setnotes] = useState(null);
  const [createFormData, setcreateFormData] = useState({
    title: "",
    body: ""
  });
  const [updateFormData, setupdateFormData] = useState({
    _id: null,
    title: "",
    body: ""
  });



  ////////////////////  api functions  /////////////////////////
  // fetch notes
  const fectNotesFunc = async () => {
    await axiosInstance.get(endpoints.notes).then((res) => {
      setnotes(res.data.notes);
    }).catch((err) => {
      console.log(err);
    })
  }
  // create notes
  const createNotesFunc = async (e) => {
    e.preventDefault();

    await axiosInstance.post(endpoints.notes, createFormData).then((res) => {
      setcreateFormData({
        title: "",
        body: ""
      })
      setnotes([...notes, res.data.note]);
    }).catch((err) => {
      console.log(err);
      setcreateFormData({
        title: "",
        body: ""
      })
    })
  }
  // update notes
  const updateNotesFunc = async (e) => {
    e.preventDefault();

    await axiosInstance.put(`${endpoints.notes}/${updateFormData._id}`, updateFormData).then((res) => {

      // setnotes([...notes, res.data.note]);
      // update notes
      const newNotes = [...notes];
      const nodetIndex = notes.findIndex((note) => {
        return note._id === updateFormData._id;
      });
      newNotes[nodetIndex] = res.data.note;
      setnotes(newNotes);

      // clear update form
      setupdateFormData({
        _id: null,
        title: "",
        body: ""
      })
    }).catch((err) => {
      console.log(err);
      setupdateFormData({
        _id: null,
        title: "",
        body: ""
      })
    })
  }
  // delete notes
  const deleteNotesFunc = async (id) => {
    await axiosInstance.delete(`${endpoints.notes}/${id}`).then((res) => {
      const filterNotes = notes.filter((note) => note._id != res.data.noteId)
      setnotes(filterNotes);

    }).catch((err) => {
      console.log(err);
      setcreateFormData({
        title: "",
        body: ""
      })
    })
  }



  ////////////////////   functions  /////////////////////////
  // handle onchange
  const handleOnChange = (e) => {
    setcreateFormData({
      ...createFormData,
      [e.target.name]: e.target.value
    })
  }

  // handle onUpdateChange
  const onUpdateChange = (e) => {
    setupdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value
    })
  }

  // toggle edit mode
  const toggleEditMode = (noteItem) => {
    console.log(noteItem._id)
    setupdateFormData({
      ...updateFormData,
      _id: noteItem._id,
      title: noteItem.title,
      body: noteItem.body,
    })
  }

  // useffect
  useEffect(() => {
    fectNotesFunc();
    return () => {
      fectNotesFunc();
    };


  }, [])




  ////////////////////  UI  /////////////////////////
  // show notes 
  const showNotes = <div className='shadow w-full px-4'>
    <h1 className='uppercase font-bold text-center mb-4'>notes</h1>
    <div className='grid grid-cols-3 gap-4'>
      {notes && notes.map((note) => {
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
              onClick={() => toggleEditMode(note)}
              className='px-4 py-1 text-center uppercase bg-green-400 rounded-md text-white'>edit</button>
            <button
              onClick={() => deleteNotesFunc(note._id)}
              className='px-4 py-1 text-center uppercase bg-red-400 rounded-md text-white'>delete</button>
          </div>
        </div>
      })}

      {!notes && <h4>No data found!!</h4>}
    </div>
  </div>

  // create note
  const createNotes = <div className=''>
    <h4 className='text-center font-bold uppercase'>create notes</h4>
    <div className='shadow py-10'>
      <form onSubmit={createNotesFunc} className='flex flex-col gap-4 justify-center items-center'>
        <input
          onChange={handleOnChange}
          className='border p-4 rounded-md w-96'
          name='title' type="text" placeholder='Title' />
        <textarea
          onChange={handleOnChange}
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

  // update note
  const updateNotes = <div className=''>
    <h4 className='text-center font-bold uppercase'>update note</h4>
    <div className='shadow py-10'>
      <form onSubmit={updateNotesFunc} className='flex flex-col gap-4 justify-center items-center'>
        <input
          value={updateFormData.title}
          onChange={onUpdateChange}
          className='border p-4 rounded-md w-96'
          name='title' type="text" placeholder='Title' />
        <textarea
          value={updateFormData.body}
          onChange={onUpdateChange}
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


  return (
    <div className='flex flex-col gap-6 p-20'>
      {showNotes}
      <hr />
      {createNotes}
      <hr />
      {updateNotes}
    </div>
  )
}

export default App
