# react-slotted [![Build Status](https://travis-ci.org/dmiller9911/react-slotted.svg?branch=master)](https://travis-ci.org/dmiller9911/react-slotted)
A React implementation of slots.

One thing seems to come up in articles/posts about why developers choose Vue over React is `slots`. From google's webcomponent docs. "Slots are placeholders inside your component that users can fill with their own markup."  React doesn't technically have this by default, although you could just provide it as a prop.  This lib was created to show that React may not be a "all in one", but it can be made to cover any of your use cases.

## Getting Started

Add the `react-slotted` package to your project.

```
yarn add react-slotted
```

or with npm:

```
npm install --save react-slotted
```

## Slot Component

```
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Slot } from 'react-slotted';

function Slotted({ children }) {
  return (
    <div>
      <header>
        <Slot slot="header">{children}</Slot>
      </header>
      <main>
        <Slot slot="main">{children}</Slot>
      </main>
      <footer>
        <Slot slot="footer">{children}</Slot>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <Slotted>
    <div data-slot="header">Header Content</div>
    <div data-slot="main">Main Body</div>
    <div data-slot="footer">Footer Content</div>
  </Slotted>
);

```

## withSlots Component

```
import React from 'react';
import * as ReactDOM from 'react-dom';
import { withSlots } from 'react-slotted';

function Slotted({ header, footer, main }) {
  return (
    <div>
      <header>
        <Slot slot="header">{children}</Slot>
      </header>
      <main>
        <Slot slot="main">{children}</Slot>
      </main>
      <footer>
        <Slot slot="footer">{children}</Slot>
      </footer>
    </div>
  );
}

function getSlots() {
  return {
    header: "Default Header Content", // Values default to values here
    main: "Default Main Body,
    footer: <DefaultFooter />, //This can even render another component
  };
}

const WrappedSlotted = withSlots(getSlots)(Slotted);

ReactDOM.render(
  <WrappedSlotted>
    <div data-slot="header">Header Content</div>
    <div data-slot="main">Main Body</div>
    <div data-slot="footer">Footer Content</div>
  </WrappedSlotted>
);

```

## Do I need this library? No.

To achieve similar functionality you can simply do the following.

```
import React from 'react';
import * as ReactDOM from 'react-dom';

function Slotted({ header, footer, children }) {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

ReactDOM.render(
  <Slotted
    header="Header",
    footer="Footer"
  >
    Main Body
  </Slotted>
);
```
