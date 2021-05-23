
import './gallery-tile.scss';
import React from 'react';

import { Gallery } from '../../../../common/images/gallery';
import { GalleryService } from '../../../services/gallery-service';

interface GalleryTileProps {
  gallery: Gallery;
  imgWidth: number;
}

export function GalleryTile(props: GalleryTileProps) {
  const resizeUri = GalleryService.getResizedImage(props.gallery.previewUri, props.imgWidth);

  return (
    <div className="gallery-tile">
      <img
        src={resizeUri}
      />
    </div>
  )
}
