
import './gallery-tile-row.scss';
import React, { useState, useEffect, Ref, useRef, useCallback, MutableRefObject } from 'react';
import { TileRow, TILE_ROW_TYPES } from '../../../services/tile-row';
import { FullWidthContainer } from '../../full-width-container/full-width-container';
import { Gallery } from '../../../../common/images/gallery';
import { GalleryTile } from './gallery-tile/gallery-tile';
import { PageScrollEvent } from '../../../../common/page/page';

interface GalleryTileRowProps {
  tileRow: TileRow;
  registerScroll: (cb: (e: PageScrollEvent) => void) => void;
}

const scrollBuffer = (window.innerHeight / 3) * 1.125;

export function GalleryTileRow(props: GalleryTileRowProps) { 
  const galleryRef = useRef<HTMLDivElement>();
  const [ scrollTop, setScrollTop ] = useState<number>();
  const [ showTileRow, setShowTileRow ] = useState<boolean>(false);
  // const [ scrollBuffer, setScrollBuffer ] = useState<number>();
  const screenWidth = window.screen.width;

  const showTileRowRef = useRef<boolean>(false);

  useEffect(() => {
    let nextScrollBuffer: number;
    props.registerScroll(handleScroll);
    const galleryRect = galleryRef.current.getBoundingClientRect();

    if(galleryRect.top < window.innerHeight) {
      // if it loads into the viewport, show by default
      showTileRowRef.current = true;
      handleShowTileRowRef(showTileRowRef);
    }
  }, []);

  const handleShowTileRowRef = useCallback<(node: MutableRefObject<boolean>) => void>(node => {
    if(node) {
      setShowTileRow(node.current);
    }
  }, []);

  return (
    <FullWidthContainer height='33vh'>
      <div
        className={`gallery-tile-row ${showTileRow ? 'bread':''}`}
        data-gallerykey={props.tileRow.galleryRow.map(gallery => gallery.galleryKey).join('-')}
        ref={galleryRef}>
        <div className="gallery-preview-row-container">
          {
            showTileRow && props.tileRow.galleryRow.map(gallery => {
              let previewWidth: number;
              previewWidth = getWidthByRowType(screenWidth, props.tileRow.tileRowType);
              return (
                <div
                  key={gallery.uniqueId}
                  className="gallery-preview-container">
                  <GalleryTile
                    gallery={gallery}
                    imgWidth={previewWidth}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </FullWidthContainer>
  );
  
  
  function handleScroll(e: PageScrollEvent) {
    let boundingRect: DOMRect, parentBoundingRect: DOMRect, scrollDiff: number,
      scrollOutDiff: number;
    setScrollTop(e.scrollTop);
    boundingRect = galleryRef.current.getBoundingClientRect();
    parentBoundingRect = e.target.getBoundingClientRect();
    if(!showTileRowRef.current) {
      if(
        (boundingRect.bottom > (parentBoundingRect.top - scrollBuffer))
        && (boundingRect.top < (parentBoundingRect.bottom + scrollBuffer))
      ) {
        showTileRowRef.current = true;
        handleShowTileRowRef(showTileRowRef);
      }
    } else if(showTileRowRef.current) {
      if(
        (boundingRect.bottom < (parentBoundingRect.top - scrollBuffer))
        || (boundingRect.top > (parentBoundingRect.bottom + scrollBuffer))
      ) {
        // showTileRowRef.current = false;
        // handleShowTileRowRef(showTileRowRef);
      }
    }
  }

  function getWidthByRowType(screenWidth: number, tileRowType: TILE_ROW_TYPES): number {
    let resizedWidth: number;
    switch(tileRowType) {
      case TILE_ROW_TYPES.LEFT_2:
      case TILE_ROW_TYPES.RIGHT_2:
        resizedWidth = screenWidth / 2;
        break;
      case TILE_ROW_TYPES.UNIFORM_3:
        resizedWidth = screenWidth / 3;
        break;
      default:
        resizedWidth = screenWidth;
    }
    resizedWidth = Math.round(resizedWidth);
    return resizedWidth;
  }
}
