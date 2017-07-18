import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';
import CarouselItem from './CarouselItem';
import CarouselCaption from './CarouselCaption';

interface CarouselProps extends React.HTMLProps<Carousel> {
  activeIndex?: number;
  bsSize?: Sizes;
  bsStyle?: string;
  controls?: boolean;
  defaultActiveIndex?: number;
  direction?: string;
  indicators?: boolean;
  interval?: number;
  nextIcon?: React.ReactNode;
  onSelect?: SelectCallback;
  onSlideEnd?: Function;
  pauseOnHover?: boolean;
  prevIcon?: React.ReactNode;
  slide?: boolean;

  // TODO: this is incompatible with HTMLProps.wrap, which is a string
  // wrap?: boolean;
}

export default class Carousel extends React.Component<CarouselProps> {
  public static Caption: typeof CarouselCaption;
  public static Item: typeof CarouselItem;
}
