import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>금액</th>
          <th>내용</th>
        </tr>
        {props.redux상품.map((data, idx) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.content}</td>
            </tr>
          )
        })}
      </Table>
    </div>
  )
}

function state를props화(state) {
  return {
    redux상품: state
  }
}

export default connect(state를props화)(Cart);
// export default Cart;