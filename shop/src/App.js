
// import Button from '@restart/ui/esm/Button';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useContext, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';

// import Detail from './Detail.js';

import axios from 'axios';
import Cart from './Cart.js';
import useDidMountEffect from './useDidMountEffect.js';

let Detail = lazy(() => { return import('./Detail.js')});

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(data);
  let [loadingShow, loadingShow변경] = useState(false);
  let [clickCount, clickCount변경] = useState(2);
  let [재고, 재고변경] = useState([10, 11, 12, 13, 14, 15, 16, 17]);

  //비동기 테스트
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  // useEffect(()=>{
  //   if ( count != 0 && count < 3 ) {
  //     setAge(age+1)
  //   }
  // }, [count]) 

  //첫 랜더링 막는 useEffect
  useDidMountEffect(() => {
    if ( count !== 0 && count < 3 ) {
      setAge(age+1)
    }
  }, [count]);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lee-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="background">
        <h1 style={{ color: 'forestgreen' }}>20% Season Off</h1>
        <p style={{ color: 'cornsilk' }}>
          취미로 재밌게 공부하는 프론트
        </p>
        <p>
          <Button variant="success">자세히보기</Button>
        </p>
      </div>
      <div>
          <h2>비동기테스트</h2>
          <div>안녕하십니까 전 {age}</div>
          <button onClick={() => {
            //state변경 함수는 비동기처리된다. (동기동작보다 맨 마지막에 실행됨)
            setCount(count + 1);

          }}>누르면한살먹기</button>
        </div>
      <Switch>
        <Route exact path="/detail/:seq">
          <재고context.Provider value={재고}>
            <Suspense fallback={ <div>로딩중이에요 ..</div> }>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
            </Suspense>
          </재고context.Provider>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/:id">
          <div>아무거나 적었을때</div>
        </Route>
        <Route exact path="/">
          <Container>
            <재고context.Provider value={재고}>
              <Row>
                {
                  shoes.map(function (data, idx) {
                    return (
                      <ShoeItem 신발={data} 인덱스={idx + 1} key={idx}></ShoeItem>
                    )
                  })
                }
              </Row>
            </재고context.Provider>
            {clickCount < 4 ?
              <button className="btn btn-primary" onClick={() => {
                loadingShow변경(true);
                axios.get(`https://codingapple1.github.io/shop/data${clickCount}.json`)
                  .then((result) => {
                    loadingShow변경(false);
                    let temp = [...result.data];
                    temp.map(data => {
                      data.quan = 10;
                      return data;
                    })
                    shoes변경([...shoes, ...temp]);
                    clickCount변경(clickCount + 1);
                  })
                  .catch(() => {
                    loadingShow변경(false);
                    console.log("실패");
                  });
              }}>더보기</button>
              : ""
            }

          </Container>

          {loadingShow ?
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            : null
          }
        </Route>
      </Switch>


    </div>
  );
}

function ShoeItem(props) {
  let history = useHistory();

  return (
    <Col md={4}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.인덱스}.jpg`} width="100%" alt=""
        onClick={() => { history.push(`/detail/${props.신발.id}`) }} />
      <h4>{props.신발.title} & {props.신발.price}</h4>
      <p>{props.신발.content}</p>
      <Test 인덱스={props.신발.id}></Test>
    </Col>
  )
}

function Test(props) {
  let 재고 = useContext(재고context);
  return (
    <p>재고 : {재고[props.인덱스]}</p>
  )
}

export default App;
