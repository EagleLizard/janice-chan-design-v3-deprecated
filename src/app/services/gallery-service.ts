
import { GALLERY_ENUM, SCENIC_GALLERY_KEYS } from '../../common/images/gallery-constants';
import {
  URINETOWN,
  TAMINGOFTHESHREW,
  THE_DRAG,
  NEXT_FALL,
  AGAMEMNON,
  TRIBES,
  FAT_PIG,
  UVU,
  SUNDANCE,
  RENAISSANCE_NOW,
  BYU,
  RENAISSANCE_FAIRE,
  CABARET,
  LARAMIE,
  MRBURNS,
} from '../../common/images/image-uris';
import { Gallery } from '../../common/images/gallery';
import { TILE_ROW_TYPES, TileRow } from './tile-row';
import { GALLERY_ENUM_MAP } from '../../common/images/galleries';

export const SCENIC_GALLERIES: Gallery[] = SCENIC_GALLERY_KEYS.map(galleryKey => {
  return GALLERY_ENUM_MAP[galleryKey];
});

let uniqueRowId: number = 1;

const SCENIC_TILE_IMAGE_URI_MAP: Partial<Record<GALLERY_ENUM, string>> = {
  [GALLERY_ENUM.URINETOWN]: URINETOWN,
  [GALLERY_ENUM.TAMINGOFTHESHREW]: TAMINGOFTHESHREW,
  [GALLERY_ENUM.THE_DRAG]: THE_DRAG,
  [GALLERY_ENUM.NEXT_FALL]: NEXT_FALL,
  [GALLERY_ENUM.AGAMEMNON]: AGAMEMNON,
  [GALLERY_ENUM.TRIBES]: TRIBES,
  [GALLERY_ENUM.FAT_PIG]: FAT_PIG,
  [GALLERY_ENUM.UVU]: UVU,
  [GALLERY_ENUM.SUNDANCE]: SUNDANCE,
  [GALLERY_ENUM.RENAISSANCE_NOW]: RENAISSANCE_NOW,
  [GALLERY_ENUM.BYU]: BYU,
  [GALLERY_ENUM.RENAISSANCE_FAIRE]: RENAISSANCE_FAIRE,
  [GALLERY_ENUM.CABARET]: CABARET,
  [GALLERY_ENUM.LARAMIE]: LARAMIE,
  [GALLERY_ENUM.MRBURNS]: MRBURNS,
};

const GalleryRowPattern = [
  3,
  2,
  1,
];

function getGalleryTileRowIt(): Iterator<number> {
  let currPos: number;

  return {
    next,
  }

  function next() {
    if(currPos === undefined) {
      currPos = 0;
    } else if(currPos >= (GalleryRowPattern.length - 1)) {
      currPos = 1;
    } else {
      currPos++;
    }
    return {
      value: GalleryRowPattern[currPos],
    }
  }
}

export class GalleryService {
  static getGalleryTileRows(galleries: Gallery[]): TileRow[] {
    let galleryIt: Iterator<number>, currPattern: number;
    let galleryRows: TileRow[];
    let weight: boolean, tileRowType: TILE_ROW_TYPES;
    
    galleryIt = getGalleryTileRowIt();
    weight = true;

    galleries = galleries.slice();
    galleries.reverse();
    galleryRows = [];
    while(galleries.length) {
      let galleryRow: Gallery[];
      galleryRow = [];
      currPattern = galleryIt.next().value;
      for(let i = 0; i < currPattern; ++i) {
        if(galleries.length < 1) {
          break;
        }
        galleryRow.push(galleries.pop());
      }
      if(galleryRow.length > 0) {
        tileRowType = getTileRowType(currPattern, weight);
        galleryRows.push({
          tileRowType,
          galleryRow,
          id: getUniqueId(),
        });
      }
      if(currPattern === 2) {
        weight = !weight;
      }
    }
    return galleryRows;
  }

  static getResizedImage(uri: string, width: number): string {
    return `${uri}?width=${width}`;
  }

  static getGalleryByRoute(galleryRoute: string) {
    console.log(SCENIC_GALLERIES);
    return SCENIC_GALLERIES.find(scenicGallery => {
      return scenicGallery.route === galleryRoute;
    })
  }
}

function getTileRowType(pattern: number, weight: boolean): TILE_ROW_TYPES {
  switch(pattern) {
    case 3:
      return TILE_ROW_TYPES.UNIFORM_3;
    case 2:
      return weight
        ? TILE_ROW_TYPES.LEFT_2
        : TILE_ROW_TYPES.RIGHT_2
      ;
    case 1:
      return TILE_ROW_TYPES.UNIFORM;
  }
}

function getUniqueId(): number {
  return uniqueRowId++;
}
