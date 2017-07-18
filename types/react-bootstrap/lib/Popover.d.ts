import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface PopoverProps extends React.HTMLProps<Popover> {
  // Optional
  arrowOffsetLeft?: number | string;
  arrowOffsetTop?: number | string;
  bsSize?: Sizes;
  bsStyle?: string;
  placement?: string;
  positionLeft?: number | string; // String support added since v0.30.0
  positionTop?: number | string; // String support added since v0.30.0
}

export default class Popover extends React.Component<PopoverProps> { }
