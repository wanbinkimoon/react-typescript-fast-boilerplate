import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CatcherInTheRye from './errorCatcher';
import {GlobalStyle} from './global-styles';

// STEP: prepare store

ReactDOM.render(
  <div>
    <GlobalStyle />
    <CatcherInTheRye />
  </div>,
  document.getElementById('root')
);
