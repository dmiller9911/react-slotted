jest.unmock('./withSlots');

import { shallow } from 'enzyme';
import React from 'react';
import withSlots from './withSlots';

describe('withSlots', () => {
  const TestComponent = () => null;
  const mockSlots = {
    header: () => null,
    body: 'body',
    footer: 1,
  };
  const mockGetSlots = jest.fn(() => mockSlots);
  const mockReactCloneElement = jest.fn(v => v);
  React.cloneElement = mockReactCloneElement;

  beforeEach(() => {
    mockGetSlots.mockClear();
    mockReactCloneElement.mockClear();
  });

  it('Defaults to slots returned from getSlots', () => {
    const Wrapped = withSlots(mockGetSlots)(TestComponent);
    const view = shallow(<Wrapped />);
    const props = view.props();
    expect(props.header).toBe(mockSlots.header);
    expect(props.body).toBe(mockSlots.body);
    expect(props.footer).toBe(mockSlots.footer);
  });

  it('Uses slots passed in with data-slot attribute', () => {
    const Wrapped = withSlots(mockGetSlots)(TestComponent);
    const headerSlot = <div data-slot="header">Header</div>;
    const view = shallow(
      <Wrapped>
        {headerSlot}
      </Wrapped>,
    );
    const props = view.props();
    expect(props.header).toBe(headerSlot);
  });

  it('ignores slots that are not provided in getSlots', () => {
    const Wrapped = withSlots(mockGetSlots)(TestComponent);
    const fakeSlot = <div data-slot="fake-slot">Fake Slot</div>;
    const view = shallow(
      <Wrapped>
        {fakeSlot}
      </Wrapped>,
    );
    const props = view.props();
    expect(props['fake-slot']).not.toBeDefined();
  });

  it('handles non valid react elements', () => {
    const Wrapped = withSlots(mockGetSlots)(TestComponent);
    const headerSlot = <div data-slot="header">Header</div>;
    const view = shallow(
      <Wrapped>
        {headerSlot}
        Non valid react element
      </Wrapped>,
    );
    const props = view.props();
    expect(props.header).toBe(headerSlot);
  });
});
