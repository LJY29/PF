import React from 'react';

function ScrollPage() {
  return (
    <div id="modal-layout">
      <div id="modal-layout-container">
        <button id="modal-close">닫기</button>
        <div id="modal-container">
          <div className="modal first">
            <header className="modal-head">
              <h3 className="title">교육용 콘텐츠 개발</h3>
              <dl className="environment">
                <dt>개발 언어</dt>
                <dd>React, mobx, typescript, scss</dd>
              </dl>
              <dl className="details">
                <dt>프로젝트 설명</dt>
                <dd>
                  <ul>
                    <li>비상교육 한국어 학습 서비스 KLass 및 영어 학습 서비스 Oxford의 콘텐츠 제작.</li>
                    <li>소켓 통신을 이용하여 전자칠판과 태블릿 PC간 데이터를 전달하는 것이 특징으로 선생과 학생들 간 활발한 소통이 가능합니다.</li>
                  </ul>
                </dd>
              </dl>
            </header>
            <main className="modal-body">
              <section className="dev-project">
                <h4>비상교육 영어 Oxford</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>2021-04 ~ 진행중</dd>
                </dl>
              </section>
              <section className="dev-project">
                <h4>비상교육 한국어 KLass 태국</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>2020-05 ~ 2020-06</dd>
                </dl>
              </section>
              <section className="dev-project">
                <h4>비상교육 한국어 KLass 중급2</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>2019-11 ~ 2020-02</dd>
                </dl>
              </section>
              <section className="dev-project">
                <h4>비상교육 한국어 KLass 중급1</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>2019-07 ~ 2019-10</dd>
                </dl>
              </section>
              <section className="info">
                <dl className="works">
                  <dt>담당 업무</dt>
                  <dd>
                    <ul>
                      <li><b>비상교육 영어 Oxford: 과목별 프로젝트 제작</b></li>
                      <li>&lt;reading, listening, speaking, writing, word_quiz, word_learning, video_factflix, video_reflect&gt;</li>
                      <li>&lt;reading, speaking, word_quiz&gt; 개발, css</li>
                      <li>&lt;전 과목&gt 공통 컴포넌트 개발 및 관리</li>
                      <li>※React hook 사용</li>
                    </ul>
                    <ul>
                      <li><b>비상교육 한국어 KLass: 과목별 프로젝트 제작</b></li>
                      <li>&lt;읽기, 쓰기, 말하기, 듣기, 문제풀이&gt; 개발, css</li>
                      <li>※React class 사용</li>
                    </ul>
                  </dd>
                </dl>
                <dl className="view">
                  <dt><h4>VIEW</h4></dt>
                  <dd>
                    <div className="swiper-div">
                      {/* <!-- Swiper --> */}
                      <div id="gallery-thumbs-1" className="swiper-container gallery-thumbs">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading9.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading10.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading11.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading12.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading13.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading14.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading15.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading16.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading17.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading18.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading19.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading20.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word9.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word10.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word11.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word12.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word13.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word14.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word15.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word16.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word17.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram7.jpg)"}}></div>
                        </div>
                      </div>
                      <div id="gallery-top-1" className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide" style={{}}>
                            <video className="gallery_video" controls controlsList="nodownload" preload="metadata">
                              <source src="./images/vs/reading_video.mkv" type="video/mp4" />
                              Your browser does not support the video element.
                            </video>
                          </div>
                          <div className="swiper-slide" style={{}}>
                            <video className="gallery_video" controls controlsList="nodownload" preload="metadata">
                              <source src="./images/vs/word_video.mkv" type="video/mp4" />
                              Your browser does not support the video element.
                            </video>
                          </div>
                          <div className="swiper-slide" style={{}}>
                            <video className="gallery_video" controls controlsList="nodownload" preload="metadata">
                              <source src="./images/vs/rw_video.mkv" type="video/mp4" />
                              Your browser does not support the video element.
                            </video>
                          </div>
                          <div className="swiper-slide" style={{}}>
                            <video className="gallery_video" controls controlsList="nodownload" preload="metadata">
                              <source src="./images/vs/gram_video.mkv" type="video/mp4" />
                              Your browser does not support the video element.
                            </video>
                          </div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading9.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading10.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading11.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading12.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading13.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading14.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading15.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading16.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading17.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading18.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading19.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/reading20.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word9.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word10.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word11.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word12.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word13.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word14.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word15.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word16.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/word17.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw7.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/rw8.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram1.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram2.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram3.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram4.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram5.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram6.jpg)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/vs/gram7.jpg)"}}></div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </section>
            </main>
          </div>
          <div className="modal second">
            <header className="modal-head">
              <h3 className="title">디지털북 뷰어</h3>
              <dl className="environment">
                <dt>개발 언어</dt>
                <dd>javacript, jquery, html5, css</dd>
              </dl>
              <dl className="details">
                <dt>프로젝트 설명</dt>
                <dd>
                  <p>epub 3.0 기반의 디지털북을 보여주는 뷰어</p>
                  <p>readium-js 기반으로 부가 기능들을 추가하여 커스텀 제작되었습니다.</p>
                </dd>
              </dl>
            </header>
            <main className="modal-body">
              <section className="dev-project">
                <h4>비상교육 와이즈캠프 글뼈도서관 전자책 뷰어</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>2020-09 ~ 2020-12</dd>
                </dl>
                <dl className="works">
                  <dt>담당 업무</dt>
                  <dd>
                    <ul>
                      <li>
                        PL, 디지털라이징 양산 구조 설계,
                        화면 스와이프로 페이지 이동, 
                        핀치 제스쳐로 페이지 확대 및 축소, 
                        화면 터치로 페이지 단면 확대,
                        시작 시 음성 자동 재생,
                        마지막 페이지 저장 api연결
                      </li>
                    </ul>
                  </dd>
                </dl>
              </section>
              <section className="dev-project">
                <h4>KIRD 연구관리총론 디지털북 뷰어</h4>
                <dl className="dev-term">
                  <dt>개발 기간</dt>
                  <dd>
                    <p>1차: 2019-03 ~ 2019-06</p>
                    <p>2차: 2019-10 ~ 2019-12</p>
                  </dd>
                </dl>
                <dl className="works">
                  <dt>담당 업무</dt>
                  <dd>
                    <ul>
                      <li>
                        퍼블리싱 전반(반응형), 
                        웹접근성 준수(대체 텍스트 제공, 키보드로만 조작 가능), 
                        크로스 브라우징 지원(ie11, edge, chrome, safari),
                        콘텐츠 미디어(사진, 음성, 동영상) 컨트롤러 기능, 
                        페이지 이동 기능
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl className="link">
                  <dt>웹사이트 링크</dt>
                  <dd><a href="https://www.kird.re.kr/repository/contents/digitalbook/dep_viewer/intro.html" target="_blank">https://www.kird.re.kr/repository/contents/digitalbook/dep_viewer/intro.html</a></dd>
                </dl>
              </section>
              <section className="info">
                <dl className="view">
                  <dt><h4>VIEW</h4></dt>
                  <dd>
                    <div className="swiper-div">
                      {/* <!-- Swiper --> */}
                      <div id="gallery-thumbs-2" className="swiper-container gallery-thumbs">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird1.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird2.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird3.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird4.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird5.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird6.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird7.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird8.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird9.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird10.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird11.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird12.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird13.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird14.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc1.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc2.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc3.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc4.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc5.png)"}}></div>
                          <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc6.png)"}}></div>
                        </div>
                      </div>
                      <div id="gallery-top-2" className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird1.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird2.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird3.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird4.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird5.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird6.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird7.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird8.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird9.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird10.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird11.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird12.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird13.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/kird14.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc1.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc2.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc3.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc4.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc5.png)"}}></div>
                            <div className="swiper-slide" style={{"backgroundImage":"url(./images/viewer/wc6.png)"}}></div>
                          </div>
                          {/* <!-- Add Arrows --> */}
                          <div className="swiper-button-next"></div>
                          <div className="swiper-button-prev"></div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollPage;
