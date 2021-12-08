import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { 재고context } from './App.js';

let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 };
`;

function Detail(props) {
    let history = useHistory();
    let { seq } = useParams();
    let 찾은상품 = props.shoes.find(item => item.id === Number(seq));
    let [alertShow, alertShow변경] = useState(true);
    let [inputData, inputData변경] = useState("");
    let context재고Data = useContext(재고context);

    useEffect(() => {
        let 타이머 = setTimeout(() => {alertShow변경(false)}, 2000);

        return () => { clearTimeout(타이머) }
    }, []);

    function 재고변경() {
        let temp = [...props.재고];
        temp[찾은상품.id] = temp[찾은상품.id] > 0 ? temp[찾은상품.id] - 1 : temp[찾은상품.id] ;
        props.재고변경(temp);
    }

    return (
        <div className="container">
            <Box>
                <Title 색상={'red'}>Detail</Title>
                <Title 색상={"blue"}>Detail</Title>
                <Title className="orange">Detail</Title>
            </Box>
            { inputData }
            <input onChange={ e => {inputData변경(e.target.value)} }></input>
            { alertShow ? 
            <div className="my-alert2">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={ 찾은상품?.url } width="100%" alt="" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ 찾은상품?.title }</h4>
                    <p>{ 찾은상품?.content }</p>
                    <p>{ 찾은상품?.price }</p>
                    
                    <Info 재고={context재고Data} 인덱스={찾은상품?.id}></Info>
                    <button className="btn btn-danger" onClick={() => { 재고변경()}}>주문하기</button>
                    <button className="btn btn-success" onClick={() => {
                        history.goBack(); 
                        // history.push('/');
                    }}>뒤로가기</button>
                </div>
            </div>
            
        </div>
    )
}

function Info(props) {
    return (
        <p>재고 : {props.재고[props.인덱스]}</p>
    )
}

export default Detail;