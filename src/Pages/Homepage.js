import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllNotes } from '../utils/local-data';
import NotesList from '../components/notes-list'



function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });

    }

    return <Homepage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
 
 
class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes : getAllNotes(),
        }
 
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
      }
 
 
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
 
    onAddNoteHandler({title,body,id}){
        this.setState((prevState)=>{
          return {
            notes : [
              ...prevState.notes,
              {
                id :  +new Date(),
                title,
                body,
              }
            ]
          }
        })
        alert("Catatan Ditambahkan")
      }
    render(){
 
      
        return(
          
          <div className='app-container'>
            <main>
            { this.state.notes.length !== 0 && <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/> }
      { this.state.notes.length === 0 && <h2>Tidak Ada Catatan</h2> }
        
       
        </main>
            
      
    </div>
    
        )
 
 
        };
}

export default HomePageWrapper;


