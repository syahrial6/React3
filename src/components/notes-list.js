import React from 'react';
import Noteitem from './note-item';
import PropTypes from 'prop-types';


function NotesList({notes,onDelete}){
    return (
        <div className='NoteList'>
            {
                notes.map((note)=>(
                    <Noteitem key={note.id} id={note.id} onDelete={onDelete} {...note}/>
                ))
            }
        </div>
    )
};

NotesList.propTypes ={
    notes : PropTypes.array.isRequired,
    onDelete : PropTypes.func.isRequired
}

export default NotesList;