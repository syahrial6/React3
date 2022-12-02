import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';

function DetailPageWrapper() {
  const [note, setNote] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const getnotes = async () => {
      const datas = await getNote(id);
      setNote(datas.data);
      
    }
    getnotes()
  }, [id]);
  return(
    <section>
      <div>
      <h2>{note.title}</h2>
      <p>{note.createdAt}</p>
      <p>{note.body}</p>
    </div>
    </section>
  )
}

 
export default DetailPageWrapper;

