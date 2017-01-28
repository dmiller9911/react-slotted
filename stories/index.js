import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ModalWithSlots from './Slot';
import Withslots from './WithSlots';

storiesOf('Slot', module)
  .addWithInfo(`
    The slot compnent allows you to specify slots within the component consuming them.
    `, () => (
    <ModalWithSlots>
      <div data-slot="header">Modal Header</div>
      <div data-slot="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ornare massa. Vivamus consectetur libero efficitur ultricies pellentesque. Donec porta nulla nec justo pellentesque ultrices. Nulla facilisi. Etiam ex turpis, placerat sed pulvinar a, mollis nec purus. Curabitur nisl nibullamcorper at risus sit amet, interdum volutpat ante. Curabitur at mi vitae ipsum commodo aliquam. Phasellus tincidunt iaculis est eu vehicula.
        </p>
      </div>
      <div data-slot="footer">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </ModalWithSlots>
  ));

storiesOf('withslots', module)
  .addWithInfo(`
  The withSlots HOC allows you to specify which slots will be mapped to props in the wrapped component.
  `, () => (
    <Withslots>
      <div data-slot="header">Modal Header</div>
      <div data-slot="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ornare massa. Vivamus consectetur libero efficitur ultricies pellentesque. Donec porta nulla nec justo pellentesque ultrices. Nulla facilisi. Etiam ex turpis, placerat sed pulvinar a, mollis nec purus. Curabitur nisl nibullamcorper at risus sit amet, interdum volutpat ante. Curabitur at mi vitae ipsum commodo aliquam. Phasellus tincidunt iaculis est eu vehicula.
        </p>
      </div>
      <div data-slot="footer">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </Withslots>
  ));