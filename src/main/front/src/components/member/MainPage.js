import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>메인페이지</div>
                    <div>
                        <button className='btn btn-primary' onClick={() =>
                            navigate('/detail')
                        }>상세로</button>
                        <button className='btn btn-primary' onClick={() =>
                            navigate('/goJoin')
                        }>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;