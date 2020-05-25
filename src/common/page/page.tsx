import * as React from 'react';

import './page.scss';

interface IPage {
  children: JSX.Element,
}

export function Page(props: IPage) {
  return (
    <div className="jc-page">
      {
        props.children
      }
    </div>
  );
}
