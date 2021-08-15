
import './scenic-gallery.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../../../../common/page/page';
import { GalleryService } from '../../../services/gallery-service';
import { GalleryHeading } from '../../../layout/gallery-layout/gallery-heading/gallery-heading';

interface ScenicGalleryProps {

}

export function ScenicGallery(props: ScenicGalleryProps) {
  const { galleryRoute } = useParams<{ galleryRoute: string }>();;
  const gallery = GalleryService.getGalleryByRoute(galleryRoute);

  return (
    <Page>
      <div className="scenic-gallery">
        <div className="scenic-gallery-title-section">
          <GalleryHeading
            gallery={gallery}
          />
        </div>
      </div>
    </Page>
  )
}
