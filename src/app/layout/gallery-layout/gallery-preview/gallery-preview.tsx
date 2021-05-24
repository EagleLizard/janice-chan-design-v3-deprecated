
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
  const previewGallery = props.gallery;
  return (
    <div className="gallery-preview">
      <Link
        to={galleryRoute}
      >
        <GalleryTile
          gallery={previewGallery}
          imgWidth={props.previewWidth}
        />
        <div className="preview-overlay">
          <div className="preview-overlay-base"/>
          <div className="preview-overlay-text">
            <div className="overlay-text-content">
              <div className="overlay-title">
                {previewGallery.title}
              </div>
              <div className="overlay-credit">
                {previewGallery.credit}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
