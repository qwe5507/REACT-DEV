import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

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
    return (
        <div className="container">
            <Box>
                <Title 색상={'red'}>상세페이지</Title>
                <Title 색상={"blue"}>상세페이지</Title>
                <Title className="orange">상세페이지</Title>
            </Box>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={ 찾은상품.url } width="100%" alt="" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ 찾은상품.title }</h4>
                    <p>{ 찾은상품.content }</p>
                    <p>{ 찾은상품.price }</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-success" onClick={() => {
                        history.goBack(); 
                        // history.push('/');
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;