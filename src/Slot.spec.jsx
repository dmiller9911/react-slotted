jest.unmock('./Slot');

import { shallow } from 'enzyme';
import React from 'react';
import Slot from './Slot';

describe('Slot', () => {
  const mockReactCloneElement = jest.fn(v => v);
  React.cloneElement = mockReactCloneElement;

  beforeEach(() => {
    mockReactCloneElement.mockClear();
  });

  it('renders matching slot', () => {
    const matchingSlot = <div data-slot="slot-name">Slot</div>;
    const view = shallow(<Slot slot="slot-name">{matchingSlot}</Slot>);
    expect(view.node).toBe(matchingSlot);
  });

  it('renders null if slot does not match', () => {
    const notMatchingSlot = <div data-slot="not-the-slot">Slot</div>;
    const view = shallow(<Slot slot="slot-name">{notMatchingSlot}</Slot>);
    expect(view.node).toBe(null);
  });

  it('ignores slots that do not match', () => {
    const matchingSlot = <div data-slot="slot-name">Slot</div>;
    const notMatchingSlot = <div data-slot="not-the-slot">Slot</div>;
    const view = shallow(
      <Slot slot="slot-name">
        {matchingSlot}
        {notMatchingSlot}
      </Slot>,
    );
    expect(view.node).not.toBe(notMatchingSlot);
    expect(view.node).toBe(matchingSlot);
  });
});
