import React from 'react';

function Main() {
  return (
    <div id="page1" className="scroll-page">
    <section className="projects">
        <h2><span>Projects</span></h2>
        <article className="project first">
          <div className="thumbnail">
            <img src="./images/vs/rw1.jpg" alt="교육용 콘텐츠 개발" title="교육용 콘텐츠 개발" />
          </div>
          <div className="explain">
            <div className="explain-head">
              <h3 className="title">교육용 콘텐츠 개발</h3>
              <button id="more-first" className="more">MORE</button>
            </div>
            <dl className="environment">
              <dt>개발 언어</dt>
              <dd>React, mobx, typescript, scss</dd>
            </dl>
            <dl className="details">
              <dt>프로젝트 설명</dt>
              <dd>
                <ul>
                  <li>비상교육 한국어 학습 서비스 KLass 및 영어 학습 서비스 Oxford의 콘텐츠 제작.</li>
                  <li>소켓 통신을 이용하여 전자 칠판과 태블릿 PC 간 데이터를 전달하는 것이 특징으로 선생님과 학생들 사이에 활발한 소통이 가능합니다.</li>
                </ul>
              </dd>
            </dl>
          </div>
        </article>
        <article className="project second">
            <div className="thumbnail">
              <img src="./images/viewer/kird1.png" alt="디지털북 뷰어" title="디지털북 뷰어" />
            </div>
            <div className="explain">
              <div className="explain-head">
                <h3 className="title">디지털북 뷰어</h3>
                <button id="more-second" className="more">MORE</button>
              </div>
              <dl className="environment">
                <dt>개발 언어</dt>
                <dd>html5, css, javacript, jquery</dd>
              </dl>
              <dl className="details">
                <dt>프로젝트 설명</dt>
                <dd>
                  <ul>
                    <li>epub 3.0 기반의 디지털북을 보여주는 뷰어</li>
                    <li>readium-js 기반으로 부가 기능들을 추가하여 커스텀 제작되었습니다.</li>
                  </ul>
                </dd>
              </dl>
            </div>
        </article>
    </section>
</div>
  );
}

export default Main;