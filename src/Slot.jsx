import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.any.isRequired,
  slot: PropTypes.string.isRequired,
};

function isSlot(slotName, child) {
  return React.isValidElement(child) && child.props['data-slot'] === slotName;
}

function Slot({ slot, children }) {
  let slottedChild = null;
  React.Children.forEach(children, (child) => {
    if (isSlot(slot, child)) {
      slottedChild = React.cloneElement(child);
    }
  });
  return slottedChild;
}


Slot.propTypes = propTypes;

export default Slot;
