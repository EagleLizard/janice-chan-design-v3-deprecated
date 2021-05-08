import { Gallery } from "../../common/images/gallery";

export enum TILE_ROW_TYPES {
  LEFT_2 = 'LEFT_2',
  RIGHT_2 = 'RIGHT_2',
  UNIFORM = 'UNIFORM',
  UNIFORM_3 = 'UNIFORM_3',
}

export interface TileRow {
  tileRowType: TILE_ROW_TYPES;
  galleryRow: Gallery[];
  id: number;
}
