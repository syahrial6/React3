import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddNote from '../components/AddNote';
import { addNote } from '../utils/local-data';
 
function AddPage() {
    const navigate = useNavigate();
  function onAddNoteHandler(title,body) {
    
    addNote(title,body)
    navigate("/");
  }
 
  return (
    <main>
    <section className='add-new-page'>
      <h2>Tambah Catatan</h2>
      <AddNote addContact={onAddNoteHandler} />
    </section>
    </main>
  )
}
 
export default AddPage;