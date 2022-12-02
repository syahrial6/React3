import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';
import PropTypes from 'prop-types';

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
DetailPageWrapper.propTypes={
  id:PropTypes.string.isRequired,
}

 
export default DetailPageWrapper;

