import React from 'react';
import Noteitem from './note-item';


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

export default NotesList