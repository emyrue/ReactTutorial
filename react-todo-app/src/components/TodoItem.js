import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;
  const { title } = todo;
  return <li>{title}</li>;
}

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
