import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
    let history = useHistory();
    let { seq } = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.shoes.find(seq).url} width="100%" alt="" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes.find(seq).title}</h4>
                    <p>{props.shoes.find(seq).content}</p>
                    <p>{props.shoes.find(seq).price}</p>
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