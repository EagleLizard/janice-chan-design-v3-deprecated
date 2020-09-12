
import { GALLERY_ENUM } from "./gallery-constants";

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
  }
}
