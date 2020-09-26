// 第三方
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 自定义
import './global.less';
import { routerData } from '@/router';
import Nav from '@/layouts/Nav';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routerData.map(item => {
              return <Route exact path={item.path} component={item.component} key={item.path} />;
            })}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
