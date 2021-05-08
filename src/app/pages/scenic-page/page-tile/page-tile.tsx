
import './page-tile.scss';
import React, { useEffect, useState } from 'react';
import { Gallery } from '../../../../common/images/gallery';
import { GalleryService } from '../../../services/gallery-service';

interface PageTileProps {
  gallery: Gallery;
  imageUri: string;
}

export function PageTile(props: PageTileProps) {
  const screenWidth = window.screen.width;
  const resizeUri = GalleryService.getResizedImage(props.gallery.previewUri, screenWidth);

  useEffect(() => {

  }, []);

  return (
    <div className="page-tile">
      <div className="preview-container">
        <img src={resizeUri}/>
      </div>
    </div>
  );
}
