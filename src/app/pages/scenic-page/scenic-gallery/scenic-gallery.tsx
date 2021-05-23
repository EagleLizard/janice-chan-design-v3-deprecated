
import './scenic-gallery.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../../../../common/page/page';

interface ScenicGalleryProps {

}

export function ScenicGallery(props: ScenicGalleryProps) {
  const routeParams = useParams<{ galleryKey: string }>();
  const galleryKey = routeParams?.galleryKey;
  return (
    <Page>
      <div className="scenic-gallery">
        { galleryKey }
      </div>
    </Page>
  )
}
