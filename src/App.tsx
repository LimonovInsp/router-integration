import React from 'react';
import Layout from './layout';
import Service from './screens/Service';
import './styles/global.css';
import './styles/reset.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ServiceProvider from './screens/ServiceProvider';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/service" component={Service} />
          <Route path="/service-provider" component={ServiceProvider} />
          <Redirect from="/" to="/service" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
