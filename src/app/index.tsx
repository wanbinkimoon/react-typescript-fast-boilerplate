import {Action, Location} from 'history';
import createHistory from 'history/createHashHistory';
import * as React from 'react';
import {Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';

import {Wrap} from './styles';
const history = createHistory();

type Props = {};

type State = {};

export default class App extends React.Component<Props, State> {
  public readonly state: State = {};

  componentDidMount() {
    // STEP: Checking url changes
    history.listen(
      (l: Location, a: Action): void => {
        console.groupCollapsed('HISTORY');
        console.log('location: ', l);
        console.log('action: ', a);
        console.groupEnd();
      }
    );
  }

  render() {
    return (
      <HashRouter>
        <Wrap>
          <main>
            <Switch>{/* <Route exact={true} path="/" component={Home} /> */}</Switch>
          </main>
        </Wrap>
      </HashRouter>
    );
  }
}
