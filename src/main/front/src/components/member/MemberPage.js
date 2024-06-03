import { useNavigate } from "react-router-dom";

const MemberPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>상세페이지</div>
                    <div>
                        <button className='btn btn-primary' onClick={() =>
                            navigate('/')
                        }>메인으로</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberPage;