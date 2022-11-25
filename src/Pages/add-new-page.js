import React from 'react';



class AddNewPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id:"",
            judul: "",
            isi : ""
        }

        this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
        this.onIsiChangeEventHandler = this.onIsiChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }
    onJudulChangeEventHandler(event){
        this.setState(()=>{
            return{
                judul : event.target.value,
        }
        })
    }
    
    onIsiChangeEventHandler(event){
        this.setState(()=>{
            return{
                isi : event.target.value,
        }
        })
    }

    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }


    render(){
        return(
            <form className='form' onSubmit={this.onSubmitChangeEventHandler}>
                <h1>Buat Catatan</h1>
                <label>Judul</label>
                <input placeholder='Judul' value={this.state.judul} onChange={this.onJudulChangeEventHandler}></input>
                <label className='isi'>Isi</label>
                <input placeholder='Isi' rows={3} value={this.state.isi} onChange={this.onIsiChangeEventHandler}></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
  
  export default AddNewPage;