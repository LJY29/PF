import styled, { keyframes } from 'styled-components';

const KeyframesUpdown = keyframes`
0% {
  bottom: 30px;
}
45% {
  bottom: 20px;
}
55% {
  bottom: 20px;
}
100% {
  bottom: 30px;
}
`;
export const DivCover = styled.div<{imgpath: string;}>`
  position: absolute; 
  left: 0; 
  top: 0; 
  width: 100%; 
  height: 100vh;
  overflow: hidden;
  transition: top 0.5s;    
  background-image: url(${props => props.imgpath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 111px;
    height: 46px;
    background-image: url('../images/scroll-down-icon.png');
    z-index: 2;

    animation-name: ${KeyframesUpdown};
    animation-duration: 1.2s;
    /* animation-timing-function: ease-in; */
    animation-iteration-count: infinite;
  }
`;

export const DivDark = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  filter: blur(1px);
`;

export const H1Title = styled.h1`
  position: absolute;
  top: calc(50% - 40px);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: 'Noto Serif KR', serif;
  font-size: 80px;
  text-align: center;
  word-break: keep-all;
`;

export const PDesc = styled.p`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
  text-align: center;
  word-break: keep-all;

  & b {
    color: #fff;
    font-size: 18px;
  }
`;