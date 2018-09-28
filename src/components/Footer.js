import React from 'react';
import { connect } from 'react-redux';

import { Controls } from './Controls';

const FooterComponent = ({ total, completed }) => {
  return (
    <div className="footer">
      <Controls />
      <div className="summary">
        Done {completed} / {total}
      </div>
    </div>
  )
};

let mapStateToProps = ({ todos }) => ({
  total: todos.length || 0,
  completed: todos.filter(t => t.completed).length || 0,
});

export const Footer = connect(mapStateToProps)(FooterComponent);
