import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../components/notes-list'
import { getActiveNotes,deleteNote } from '../utils/api';



function Homepage(){
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });


  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filtered = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });



  
  return(
              <div className='app-container'>
                <main>
                { notes.length !== 0 && <NotesList notes={filtered} onDelete={onDeleteHandler}/> }
          { notes.length === 0 && <h2>Tidak Ada Catatan</h2> }     
               </main>      
        </div>
        )
  
}
export default Homepage
