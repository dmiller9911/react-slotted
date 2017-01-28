import { ReactNode } from 'react';

type componentOrSFC<T> = React.ComponentClass<T> | React.SFC<T>;

interface ISlots {
  [slotName: string]: ReactNode;
}

interface IGetSlots {
  (): ISlots;
}

interface IWrappedSlots<IOwnProps> {
  (Component: componentOrSFC<IOwnProps>): React.SFC<IOwnProps>;
}

export declare function withSlots<IOwnProps>(
  getSlots: IGetSlots
): IWrappedSlots<IOwnProps>;

interface ISlotComponentProps {
  slot: string;
  children?: React.ReactNode;
}

export declare var Slot: React.SFC<ISlotComponentProps>;
