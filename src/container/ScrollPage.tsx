import React from 'react';

function ScrollPage() {
  return (
    <div id="cover" className="scroll-page">
      <div className="dark"></div>
      <canvas id="canvas"></canvas>
      <h1 className="cover_title">안녕하세요. &#8220;이지엽&#8221;입니다.</h1>
      <p className="cover_desc">아래로 <b>스크롤</b> 또는 <b>스와이프</b> 해주세요.</p>
    </div>
  );
}

export default ScrollPage;
  