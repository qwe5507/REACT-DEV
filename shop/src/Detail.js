import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
    let history = useHistory();
    let { seq } = useParams();
    let 찾은상품 = props.shoes.find(item => item.id === Number(seq));
    return (
        <div className="container">
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