/* eslint react/prop-types: 0, no-prototype-builtins: 0 */
import React from 'react';

const withSlots = getSlots => Component => (props) => {
  const slotProps = { ...getSlots() };
  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }

    const slotName = child.props['data-slot'];
    if (slotProps.hasOwnProperty(slotName)) {
      slotProps[slotName] = React.cloneElement(child);
    }
  });

  return <Component {...props} {...slotProps} />;
};

export default withSlots;
