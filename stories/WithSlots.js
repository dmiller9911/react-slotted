import React, { PropTypes } from 'react';
import { withSlots } from '../lib';

const stringOrElement = PropTypes.oneOfType([PropTypes.element,PropTypes.string]);

const propTypes = {
  header: stringOrElement.isRequired,
  body: stringOrElement.isRequired,
  footer: stringOrElement.isRequired
};

const modalStyles = {
  margin: 15,
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
};

const headerStyles = {
  padding: 10,
  fontSize: '2rem',
  borderBottom: '1px solid rgba(0,0,0,0.12)'
};

const bodyStyles = {
  padding: 15
};

const footerStyles = {
  padding: 10,
  textAlign: 'right',
  borderTop: '1px solid rgba(0,0,0,0.12)'
};

const SlottedModal = ({ header, body, footer }) => (
  <div style={modalStyles}>
    <header style={headerStyles}>
      {header}
    </header>
    <section style={bodyStyles}>
      {body}
    </section>
    <footer style={footerStyles}>
      {footer}
    </footer>
  </div>
);

SlottedModal.propTypes = propTypes;

function getSlots() {
  return {
    header: 'default header value',
    body: 'default body value',
    footer: 'default footer value'
  };
}

export default withSlots(getSlots)(SlottedModal);