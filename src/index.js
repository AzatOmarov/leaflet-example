import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from 'Containers/MainContainer';
import { APP_DOM_ELEMENT } from 'Constants/GlobalConstants';

render(
  <Router>
    <MainContainer />
  </Router>,
  APP_DOM_ELEMENT
);

