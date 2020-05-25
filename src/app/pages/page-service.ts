
export enum PAGE_ENUM {
  SCENIC = 'SCENIC',
  ART = 'ART',
  ABOUT = 'ABOUT',
}

interface PageItem {
  pageKey: PAGE_ENUM,
  label: string,
  route: string,
}

export const SCENIC_PAGE: PageItem = {
  pageKey: PAGE_ENUM.SCENIC,
  label: 'scenic',
  route: '/scenic',
};

export const ART_PAGE: PageItem = {
  pageKey: PAGE_ENUM.ART,
  label: 'art',
  route: '/art',
};

export const ABOUT_PAGE: PageItem = {
  pageKey: PAGE_ENUM.ABOUT,
  label: 'janice',
  route: '/janice',
};

export const PAGES = [
  SCENIC_PAGE,
  ART_PAGE,
  ABOUT_PAGE,
];
