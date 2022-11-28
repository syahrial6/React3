import React from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
class AddNote extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state)
  }

  render() {
   return (
     <form className='AddNewPage' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="input" />
       <input type="text" placeholder="Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} className="body"/>
       <button type="submit" className='tombol'><FiCheck/></button>
     </form>
   )
 }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
 }

export default AddNote;
