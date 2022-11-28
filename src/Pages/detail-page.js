import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/Detail-item';
import { getNote } from '../utils/local-data';



function DetailPageWrapper() {

  const { id } = useParams();
  return <DetailPage id={id} />;
}

 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
 
    // cannot using Hooks inside class component
    this.state = {
      note: getNote(props.id)
    };
  }
 
  render() {
    return (
      <section>
        <ItemDetail {...this.state.note} />
      </section>
    );
  }
}

 
export default DetailPageWrapper;

