import * as React from 'react';
import { TransitionCallbacks } from 'react-bootstrap';

interface TabPaneProps extends TransitionCallbacks, React.HTMLProps<TabPane> {
  animation?: boolean | React.ComponentClass<any>;
  'aria-labelledby'?: string;
  bsClass?: string;
  eventKey?: any;
  unmountOnExit?: boolean;
}

export default class TabPane extends React.Component<TabPaneProps> { }
