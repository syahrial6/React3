import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddNote from '../components/AddNote';
import swal from 'sweetalert';
import { addNote } from '../utils/api';
import PropTypes from 'prop-types';
 
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
AddPage.propTypes = {
  addNote: PropTypes.func.isRequired,
  
 }
 
export default AddPage;