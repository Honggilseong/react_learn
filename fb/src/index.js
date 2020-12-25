import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './component/service/auth';
import Fileupload from './component/service/fileupload';
import PostsData from './component/service/db';
import MessengerData from './component/service/message';
const authService = new AuthService();
const fileUpload = new Fileupload();
const postsData = new PostsData();
const messengerData = new MessengerData();
ReactDOM.render(
  <React.StrictMode>
    <App messengerData={messengerData} postsData={postsData} fileUpload={fileUpload} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
