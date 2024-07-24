import React, { useEffect, useRef, useState } from 'react';

import { setFirefly } from '@/common/util';
import {DivCover, DivDark, Canvas, H1Title, PDesc} from './CoverPageStyles';
import coverImg from '@/images/zhang-kaiyv-FmyIBz2JDHU-unsplash.jpg';
import { useNavigate } from 'react-router-dom';

function CoverPage() {
  const navigate = useNavigate();

  const [pageNum, setPageNum] = useState<number>(0); //현재 페이지 번호 //cover: 0
  const [isWheelBlocked, setIsWheelBlocked] = useState<boolean>(false);
  const directionRef = useRef<number>(0); //Wheel direction //1: down, -1: up
  const timeIdRef = useRef<NodeJS.Timeout | number>(0);

  useEffect(()=>{
    document.addEventListener('wheel', mouseWheelFnc);
    setFirefly(0.5);

    return ()=>{
      document.removeEventListener('wheel', mouseWheelFnc);
    };
  }, []);

  useEffect(()=>{
    showPage(pageNum);
    if(pageNum === 1){
      navigate('/main');
    }
  }, [pageNum]);

  const showPage = (n: number) => {
    const cover = document.querySelector('#cover') as HTMLElement;
    if(n === 0){
      cover.style.top = '0';
    }else{
      cover.style.top = '-100vh';
      document.querySelectorAll('section.projects h2 span').forEach(element => {
        (element as HTMLElement).style.animationPlayState = 'running';
      });
    }
  }

  const mouseWheelFnc = (e: WheelEvent) => {
    clearTimeout(timeIdRef.current);
    timeIdRef.current = setTimeout(function() {
      setIsWheelBlocked(false);
    }, 200);

    if(isWheelBlocked) return;
    setIsWheelBlocked(true);

    console.log('=======e', e.deltaY / 100)
    if(e.deltaY === undefined){
      directionRef.current = e.detail / 3;
    }else{
      directionRef.current = e.deltaY / 100;
    }

    if(directionRef.current > 0){
      //다음 페이지
      setPageNum(1);
    }
  };
  
  return (
    <DivCover id="cover" className="scroll-page" imgpath={coverImg}>
      <DivDark className="dark"></DivDark>
      <Canvas id="canvas"></Canvas>
      <H1Title className="cover_title">안녕하세요. &#8220;이지엽&#8221;입니다.</H1Title>
      <PDesc className="cover_desc">아래로 <b>스크롤</b> 또는 <b>스와이프</b> 해주세요.</PDesc>
    </DivCover>
  );
}

export default CoverPage;
  