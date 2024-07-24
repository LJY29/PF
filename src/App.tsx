import React, { useEffect, useRef, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import CoverPage from './container/Cover/CoverPage';
import Main from './container/Main';
import Modal from './container/Modal';
import GlobalStyles from './GlobalStyles';
import { DivFocusCover, ASkipNav } from './AppStyles';

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
    Component: CoverPage,
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

const theme = {
};
function App() {
  const [pageNum, setPageNum] = useState<number>(0); //현재 페이지 번호 //cover: 0
  // const navigate = useNavigate();
  
  useEffect(()=>{
    showPage(pageNum);
    if(pageNum === 1){
      // navigate('/main');
    }
  }, [pageNum]);

  const clickSkipNav = () => {
    setPageNum(1);
  }

  const showPage = (n: number) => {
    const cover = document.querySelector('#cover') as HTMLElement;
    if(n === 0){
      if(cover) cover.style.top = '0';
    }else{
      if(cover) cover.style.top = '-100vh';
      document.querySelectorAll('section.projects h2 span').forEach(element => {
        (element as HTMLElement).style.animationPlayState = 'running';
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <DivFocusCover id="wrap" className="focus_cover">
          <ASkipNav href="#page1" id="skip-nav" onClick={clickSkipNav}>본문 바로가기</ASkipNav>
          {/* <header id="header">
            <h1></h1>
          </header> */}
          <RouterProvider router={router} />
        </DivFocusCover>
      </div>
    </ThemeProvider>
  );
}

export default App;
