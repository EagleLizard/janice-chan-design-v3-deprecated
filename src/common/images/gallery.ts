
import { GALLERY_ENUM } from "./gallery-constants";
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

const GALLERY_PREVIEW_URI_MAP: Partial<Record<GALLERY_ENUM, string>> = {
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

let uniqueIdCounter: number;
uniqueIdCounter = 0;

export class Gallery {
  galleryKey: GALLERY_ENUM;
  galleryUris: string[];
  title: string;
  // image: GalleryImage;
  route: string;
  organization: string;
  credit: string;
  description: string[];
  year: string;
  location: string;
  previewUri: string;
  uniqueId: number;
  constructor(
    galleryKey: GALLERY_ENUM,
    galleryUris: string[],
    title: string, 
    route: string, 
    organization: string,
    credit: string,
    description: string[],
    year: string,
    location: string,
  ){
    this.galleryKey = galleryKey;
    this.galleryUris = galleryUris;
    this.title = title;
    this.route = route;
    this.organization = organization;
    this.credit = credit;
    this.description = description;
    this.year = year;
    this.location = location;
    this.previewUri = GALLERY_PREVIEW_URI_MAP[this.galleryKey];
    this.uniqueId = getUniqueId();
  }
}

function getUniqueId() {
  return uniqueIdCounter++;
}
