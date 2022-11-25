import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail({ title, body, createdAt }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

ItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ItemDetail;
