import React, { UIEvent } from 'react';

import './page.scss';

export interface PageScrollEvent {
  event:  UIEvent<HTMLDivElement>;
  target: EventTarget & HTMLDivElement;
  scrollTop: number;
}

interface IPage {
  children: JSX.Element,
  onScroll?: (e: PageScrollEvent) => void;

}

export function Page(props: IPage) {
  return (
    <div
      className="jc-page"
      onScroll={handleScroll}>
      {
        props.children
      }
    </div>
  );

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    let scrollParent: EventTarget & HTMLDivElement,
      scrollTop: number;
    scrollParent = e.currentTarget;
    scrollTop = scrollParent.scrollTop;
    props.onScroll({
      event: e,
      target: e.currentTarget,
      scrollTop,
    });
  }
}
