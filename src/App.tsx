// 第三方
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 自定义
import './global.less';
import { routerData } from '@/router';
import Nav from '@/layouts/Nav';
import store from '@/store/store';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router>
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routerData.map(item => {
                return <Route exact path={item.path} component={item.component} key={item.path} />;
              })}
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
