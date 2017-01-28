import React from 'react';
import Slot from '../src/Slot';

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

const ModalWithSlots = ({ children }) => (
  <div style={modalStyles}>
    <header style={headerStyles}>
      <Slot slot="header">{children}</Slot>
    </header>
    <section style={bodyStyles}>
      <Slot slot="body">{children}</Slot>
    </section>
    <footer style={footerStyles}>
      <Slot slot="footer">{children}</Slot>
    </footer>
  </div>
);

export default ModalWithSlots;