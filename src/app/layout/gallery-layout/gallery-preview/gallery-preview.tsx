
import './gallery-preview.scss';

import React from 'react';
import { Gallery } from '../../../../common/images/gallery';
import { GalleryTile } from '../gallery-tile/gallery-tile';
import { Link, useRouteMatch } from 'react-router-dom';

interface GalleryPreviewProps {
  gallery: Gallery;
  previewWidth: number;
}

export function GalleryPreview(props: GalleryPreviewProps) {
  const { path, url } = useRouteMatch();
  const galleryRoute = `${url}/${props.gallery.route}`;
  return (
    <div className="gallery-preview">
      <Link
        to={galleryRoute}
      >
        <GalleryTile
          gallery={props.gallery}
          imgWidth={props.previewWidth}
        />
      </Link>
    </div>
  );
}
