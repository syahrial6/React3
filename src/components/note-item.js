import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteButton from './Delete';


function Noteitem({ id, title, body,createdAt }) {
    return (
      <article className='noteitem'>
        <h3 className='noteitem__title'>
          <Link to={`/detail/${id}`}>{title}</Link>
        </h3>
        <p className='noteitem__createdAt'>{createdAt}</p>
        <p className='noteitem__body'>{body}</p>
        
        <DeleteButton/>
      </article>
    );
  }

Noteitem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  };
  
export default Noteitem