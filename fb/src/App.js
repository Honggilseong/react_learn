import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Login from './component/login/login';
import Main from './component/main/main';
import Messenger from './component/messenger/messenger';

function App({messengerData,postsData,fileUpload,authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/main">
            <Main postsData={postsData} authService={authService} fileUpload={fileUpload}/>
          </Route>
          <Route path="/messenger">
            <Messenger messengerData={messengerData} authService={authService} />
          </Route>
          </>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
