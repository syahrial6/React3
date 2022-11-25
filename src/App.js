import React from 'react';
import NotesList from './components/notes-list';
import AddNewPage from './Pages/add-new-page';
import { getAllNotes } from './utils/local-data';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import DetailPageWrapper from './Pages/detail-page';
 
 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes : getAllNotes(),
        }
 
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    console.log(this.state.notes)
      }
 
 
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
 
    onAddContactHandler({title,body,id}){
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
        <Routes>
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
            <Navigation></Navigation>
      <AddNewPage addNote={this.onAddContactHandler}/>
      <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>

    </div>
    
        )
 
 
        };
}
export default App;