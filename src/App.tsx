import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './components/Header';
import { observer } from 'mobx-react';
import { TodoPage } from './components/pages/TodoPage';
import { EditPage } from './components/pages/EditPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from './components/pages/NotFoundPage';


const App = observer(() => {
  console.count('app render');

  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <div className="main-wrapper">
          <div className="container">
            <Switch>
              <Route path="/" component={TodoPage} exact/>
              <Route path="/edit" component={EditPage}/>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
})

export default App;
