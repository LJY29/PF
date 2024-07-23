import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import './App.css';
import ScrollPage from './container/ScrollPage';
import Main from './container/Main';
import Modal from './container/Modal';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    action: async function action() {
      // await fakeAuthProvider.signout();
      return redirect("/");
    },
    loader: async function loginLoader() {
      // if (fakeAuthProvider.isAuthenticated) {
      //   return redirect("/");
      // }
      return null;
    },
    Component: ScrollPage,
  },
  {
    id: 'main',
    path: '/main',
    Component: Main,
  },
  {
    id: 'modal',
    path: '/modal',
    Component: Modal,
  }
]);

function App() {
  return (
    <div className="App">
      <div id="wrap" className="focus_cover">
        <a href="#page1" id="skip-nav">본문 바로가기</a>
        <header id="header">
          <h1></h1>
        </header>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
