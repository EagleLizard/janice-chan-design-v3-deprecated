
import './full-width-container.scss';
import React, { UIEvent } from 'react';

interface FullWidthContainerProps {
  children: JSX.Element,
  height: string;
}

export function FullWidthContainer(props: FullWidthContainerProps) {
  const scope = {
    fullWidthContainerStyle: {
      height: props.height,
    },
  };

  return (
    <div 
      className="full-width-container"
      style={scope.fullWidthContainerStyle}
      onScroll={handleScroll}>
      {
        props.children
      }
    </div>
  );

  function handleScroll(e: UIEvent<HTMLElement>) {
    console.log(e);
  }
}
