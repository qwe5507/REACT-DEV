// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천","선릉 맛집", "회사가기 싫은 이유"]);
  let [따봉갯수, 따봉갯수변경] = useState(0);

  function 제목변경하는숙제() {
    let 임시방편 = [...글제목];
    임시방편[0] = "여자 코트 추천";
    글제목변경(임시방편);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'blue', fontSize: '30px'}}>
          이진강 개발 Blog
          </div>
      </div>
      <button onClick={ () => 제목변경하는숙제() }>숙제버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => 따봉갯수변경(따봉갯수 + 1) }>👍</span> {따봉갯수} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>3월 10일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>지금 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;

