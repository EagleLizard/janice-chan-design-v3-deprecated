import './scenic-page.scss';

import React, { useState, useRef, useEffect } from 'react';
import _throttle from 'lodash.throttle';
import _debounce from 'lodash.debounce';

import { Page, PageScrollEvent } from '../../../common/page/page';
import { SCENIC_GALLERY_KEYS } from '../../../common/images/gallery-constants';
import { GALLERY_ENUM_MAP } from '../../../common/images/galleries';
import { Gallery } from '../../../common/images/gallery';
import { GalleryService } from '../../services/gallery-service';
import { TileRow } from '../../services/tile-row';
import { GalleryTileRow } from '../../layout/gallery-tile-row/gallery-tile-row';

const SCENIC_GALLERIES: Gallery[] = SCENIC_GALLERY_KEYS.map(galleryKey => {
  return GALLERY_ENUM_MAP[galleryKey];
});

interface ScenicPageProps {

}

export function ScenicPage(props: ScenicPageProps) {
  const scrollFns = useRef<((e: PageScrollEvent) => void)[]>([]);

  let galleryRows: TileRow[];
  galleryRows = GalleryService.getGalleryTileRows(SCENIC_GALLERIES);
  const throttleHandleScroll = _throttle(handleScroll, 50);

  return (
    <Page
      onScroll={throttleHandleScroll}>
      <div className="scenic-page">
        {
          galleryRows.map(tileRow => (
            <div
              className="content-row-container"
              key={tileRow.id}>
              <GalleryTileRow
                tileRow={tileRow}
                registerScroll={onRegisterScroll}
              />
            </div>
          ))
        }
      </div>
    </Page>
  );

  function onRegisterScroll(cb: (e: PageScrollEvent) => void) {
    let nextScrollFns: ((e: PageScrollEvent) => void)[];
    nextScrollFns = scrollFns.current.slice();
    nextScrollFns.push(cb);
    scrollFns.current = nextScrollFns;
  }

  function handleScroll(e: PageScrollEvent) {
    scrollFns.current.forEach(scrollFn => scrollFn(e));
  }
}
