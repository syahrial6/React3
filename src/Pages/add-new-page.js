import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddNote from '../components/AddNote';
import { addNote } from '../utils/local-data';
import swal from 'sweetalert';
 
function AddPage() {
    const navigate = useNavigate();
  function onAddNoteHandler(title,body) {
    
    addNote(title,body)
    swal("Berhasil", "Catatan Ditambahkan", "success");
    navigate("/");
  }
 
  return (
    <main>
    <section className='addnewpage'>
      <h2>Tambah Catatan</h2>
      <AddNote addNote={onAddNoteHandler} />
    </section>
    </main>
  )
}
 
export default AddPage;