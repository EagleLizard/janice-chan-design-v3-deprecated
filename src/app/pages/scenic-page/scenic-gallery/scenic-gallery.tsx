
import './scenic-gallery.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../../../../common/page/page';
import { GalleryService } from '../../../services/gallery-service';

interface ScenicGalleryProps {

}

export function ScenicGallery(props: ScenicGalleryProps) {
  const { galleryRoute } = useParams<{ galleryRoute: string }>();;
  const gallery = GalleryService.getGalleryByRoute(galleryRoute);

  return (
    <Page>
      <div className="scenic-gallery">
        <div>
          <h1>
            { gallery.title }
          </h1>
        </div>
        <div>
          {gallery.location}
        </div>
      </div>
    </Page>
  )
}
