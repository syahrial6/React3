import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash } from 'react-icons/fi';
 
function DeleteButton({ id, onDelete }) {
  return <button className='delete' onClick={() => onDelete(id)}><FiTrash/></button>
}

DeleteButton.prototype = {
  id:PropTypes.string.isRequired,
  onDelete:PropTypes.func.isRequired
}
 
export default DeleteButton;