import { useEffect, memo } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector, } from 'react-redux';

function Cart(props) {

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <Table responsive>
        <tr>
          <th>상품번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>내용</th>
          <th>-</th>
        </tr>
        {state.reducer?.map((data, idx) => {
          return (
            <tr key={idx}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data?.surang}</td>
              <td><button onClick={() => { dispatch({ type: "수량증가", 상품번호: data.id }) }}>+</button>
                <button onClick={() => { dispatch({ type: "수량감소", 상품번호: data.id }) }}>-</button></td>
              <td>
                <Button variant="danger active" onClick={() => {
                  dispatch({ type: "항목삭제", 상품번호: data.id })
                }}>x</Button>
              </td>
            </tr>
          )
        })}
      </Table>
      {props.alert상태 ?
        <div className="my-alert2">
          <p>지금 구매하시면 신규 할인 20%</p>
          <button onClick={() => { dispatch({ type: "ui닫기" }) }}>닫기</button>
        </div>
        : null
      }
      <Parent 이름={'이진강'} 나이={28}></Parent>
    </div>
  )
}

// function state를props화(state) {
//   return {
//     redux상품: state.reducer,
//     alert상태: state.reducer3
//   }
// }

// export default connect(state를props화)(Cart);
export default Cart;

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름} />
      <Child2 나이={props.나이} />
    </div>
  )
}
function Child1(props) {
  useEffect(() => { console.log('렌더링됨1') });
  return <div>1111</div>
}
let Child2 = memo(function (props) {
  useEffect(() => { console.log('렌더링됨2') });
  return <div>2222</div>
});