import './scenic-page.scss';

import React from 'react';

import { Page } from '../../../common/page/page';
import { SCENIC_GALLERY_KEYS, GALLERY_ENUM_MAP } from '../../../common/images/gallery-constants';
import { Gallery } from '../../../common/images/gallery';
import { PageTile } from './page-tile/page-tile';

const SCENIC_GALLERIES: Gallery[] = SCENIC_GALLERY_KEYS.map(galleryKey => {
  return GALLERY_ENUM_MAP[galleryKey];
});

interface ScenicPageProps {

}

export function ScenicPage(props: ScenicPageProps) {
  return (
    <Page>  
      <div className="scenic-page">
        {
          SCENIC_GALLERIES.map(gallery => (
            <PageTile
              gallery={gallery}
            />
          ))
        }
      </div>
    </Page>
  )
}
