
import './gallery-heading.scss';
import React from 'react';

import { Gallery } from '../../../../common/images/gallery';
import { GalleryService } from '../../../services/gallery-service';

interface GalleryHeadingProps {
  gallery: Gallery
}

export function GalleryHeading(props: GalleryHeadingProps) {
  const maxWidth = window.screen.width;
  const resizeImgUri = GalleryService.getResizedImage(props.gallery.previewUri, maxWidth);
  return (
    <div className="gallery-heading">
      <div className="text-content">
        <h1>
          { props.gallery.title }
        </h1>
        <div>
          { props.gallery.location }
        </div>
      </div>
      <div className="title-image-container">
        <img src={resizeImgUri}/>
      </div>
    </div>
  )
}
