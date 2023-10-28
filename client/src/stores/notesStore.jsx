import { create } from 'zustand'
import { axiosInstance, endpoints } from '../axios';

const notesStore = create((set) => ({
  notes: null,
  createFormData: {
    title: "",
    body: ""
  },
  updateFormData: {
    _id: null,
    title: "",
    body: ""
  },
  // internal methods
  handleOnChange: (e) => {
    set((state) => {
      return {
        createFormData: {
          ...state.createFormData,
          [e.target.name]: e.target.value
        }
      }
    })
  },
  toggleEditMode: (noteItem) => {
    set(state => {
      return {
        updateFormData: {
          ...state.updateFormData,
          _id: noteItem._id,
          title: noteItem.title,
          body: noteItem.body,
        }
      }
    })
  },
  onUpdateChange: (e) => {
    set(state => {
      return {
        updateFormData: {
          ...state.updateFormData,
          [e.target.name]: e.target.value
        }
      }
    })
  },
  // api calls
  fectNotesFunc: async () => {
    await axiosInstance.get(endpoints.notes).then((res) => {
      // setnotes(res.data.notes);
      set({ notes: res.data.notes })
    }).catch((err) => {
      console.log(err);
    })
  },
  createNotesFunc: async (e) => {
    e.preventDefault();

    const { createFormData, notes } = notesStore.getState();
    await axiosInstance.post(endpoints.notes, createFormData).then((res) => {
      set({
        notes: [...notes, res.data.note],
        createFormData: {
          title: "",
          body: ""
        }
      })
    }).catch((err) => {
      console.log(err);
      set({
        createFormData: {
          title: "",
          body: ""
        }
      })
    })
  },
  deleteNotesFunc: async (id) => {
    await axiosInstance.delete(`${endpoints.notes}/${id}`).then((res) => {
      const { notes } = notesStore.getState();
      const filterNotes = notes.filter((note) => note._id != res.data.noteId)
      set({ notes: filterNotes })

    }).catch((err) => {
      console.log(err);
      set({
        createFormData: {
          title: "",
          body: ""
        }
      })
      // setcreateFormData({
      //   title: "",
      //   body: ""
      // })
    })
  },
  updateNotesFunc: async (e) => {
    e.preventDefault();

    const { updateFormData, notes } = notesStore.getState();

    await axiosInstance.put(`${endpoints.notes}/${updateFormData._id}`, updateFormData).then((res) => {

      // update notes
      const newNotes = [...notes];
      const nodetIndex = notes.findIndex((note) => {
        return note._id === updateFormData._id;
      });
      newNotes[nodetIndex] = res.data.note;

      set({
        notes: newNotes,
        updateFormData: {
          _id: null,
          title: "",
          body: ""
        }
      })
    }).catch((err) => {
      console.log(err);
      set({
        updateFormData: {
          _id: null,
          title: "",
          body: ""
        }
      })
    })
  }
}))

export default notesStore;