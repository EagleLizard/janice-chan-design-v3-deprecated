
import './page-tile.scss';
import React from 'react';
import { Gallery } from '../../../../common/images/gallery';

interface PageTileProps {
  gallery: Gallery;
}

export function PageTile(props: PageTileProps) {
  return (
    <div className="page-tile">
      {
        props.gallery.title
      }
    </div>
  );
}
