// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "선릉 맛집", "회사가기 싫은 이유"]);
  let [따봉갯수, 따봉갯수변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState([false, false, false]);

  function 반복된UI() {
    let 어레이 = [];
    for (let i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }

  function 제목변경하는숙제() {
    let 임시방편 = [...글제목];
    임시방편[0] = "여자 코트 추천";
    글제목변경(임시방편);
  }
  
  function 글정렬() {
    let temp = [...글제목];
    temp.sort();
    글제목변경(temp);
  }
  
  function 따봉갯수변경함수(idx) {
    let temp = [...따봉갯수];
    temp[idx] += 1;
    따봉갯수변경(temp);
  }

  function 모달변경함수(idx) {
    let temp = [...modal];
    temp[idx] = !temp[idx]
    modal변경(temp);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'blue', fontSize: '30px'}}>
          이진강 개발 Blog
          </div>
      </div>
      <button onClick={ 제목변경하는숙제 }>숙제버튼</button>
      <button onClick={ 글정렬 }>정렬버튼</button>

      {
        글제목.map( (title, idx) => {
          console.log(idx);
            return <div className="list">
            <h3> 
              <span className="title" onClick = { () => 모달변경함수(idx) }>{ title }</span> 
              <span onClick={ () => 따봉갯수변경함수(idx) }>👍 {따봉갯수[idx]}</span>
            </h3>
            <p>지금 발행</p>
            <hr/>
            <Modal 글의제목={title} 모달={modal[idx]}></Modal>
          </div>
          }
        )
        
      }
      { 반복된UI() }

    </div>
  );
}
function Modal(props) {
  return (
    <>
      { 
        props.모달
        ? 
        <div className="modal">
          <h2>{props.글의제목}</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
        : null
      }
    </>
    
  )
}

export default App;

