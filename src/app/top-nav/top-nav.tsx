import * as React from 'react';

import './top-nav.scss';

import {
  PAGE_ENUM,
  PAGES,
  SCENIC_PAGE,
} from '../pages/page-service';
import { LOGO } from '../../common/images/image-uris';
import * as imageService from '../../common/images/image-service';
import { Link } from 'react-router-dom';

interface ITopNav {
  onSelect: (selectedPage: PAGE_ENUM) => any,
}

export function TopNav(props: ITopNav) {
  const LOGO_URI = imageService.getImageUri(LOGO, 183);

  const getPages = () => {
    return PAGES.map(page => {
      return (
        <Link
          to={page.route}
          key={page.pageKey}
          className="page-link">
          {
            page.label
          }
        </Link>
      );
    });
  };

  return (
    <div className="top-nav">
      <div className="left-logo">
        <Link to="/">
          <img src={LOGO_URI}/>
        </Link>
      </div>
      <div className="page-link-container">
        { getPages() }
      </div>
    </div>
  );
}
