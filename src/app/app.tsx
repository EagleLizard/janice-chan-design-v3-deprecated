import * as React from 'react';

import './app.scss';
import { TopNav } from './top-nav/top-nav';
import {
  PAGE_ENUM,
  SCENIC_PAGE,
  ART_PAGE,
  ABOUT_PAGE,
} from './pages/page-service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ScenicPage } from './pages/scenic-page/scenic-page';
import { ArtPage } from './pages/art-page/art-page';
import { AboutPage } from './pages/about-page/about-page';

export function App(props: any) {
  const onPageSelect = (pageItem: PAGE_ENUM) => {

  }

  return (
    <Router>
      <div className="jc-app">
        <div className="top-nav-container">
          <TopNav
            onSelect={onPageSelect}
          />
        </div>
        <div className="app-content">
          <Switch>
            <Route
              exact
              path="/">
              <Redirect to={SCENIC_PAGE.route}
            />
            </Route>
            <Route path={SCENIC_PAGE.route}>
              <ScenicPage/>
            </Route>
            <Route path={ART_PAGE.route}>
              <ArtPage/>
            </Route>
            <Route path={ABOUT_PAGE.route}>
              <AboutPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
