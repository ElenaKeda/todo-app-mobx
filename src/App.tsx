import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './components/Header';
import { observer } from 'mobx-react';
import { TodoPage } from './components/pages/TodoPage';
import { EditPage } from './components/pages/EditPage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NotFound } from './components/pages/NotFoundPage';
import { useService } from './components/Hooks';


const App = observer(() => {
  console.count('app render');
  const todoList = useService()

  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <div className="main-wrapper">
          <div className="container">
            <Switch>
              <Route path="/todo" component={TodoPage} exact/>
              <Route path="/todo/:id" component={EditPage}/>
              <Route path="/404" component={NotFound} />
              <Redirect from='*' to='/404' />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
})

export default App;
