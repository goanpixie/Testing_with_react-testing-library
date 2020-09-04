import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ children }, props) => {
  const { id, title } = props;
  const [showMessage, setShowMessage] = useState(false);
  return (
    <li>
      <label htmlFor={id}> Show Message
        <input
          type="checkbox"
          id={id}
          onChange={(e) => setShowMessage(e.target.checked)}
          checked={showMessage}
        />
        {title}
      </label>
      {showMessage ? children : null}
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default TodoItem;
