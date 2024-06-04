import "./ProfilleDetaile.css";
const ProfilleDetail = () => {
    return(
        <div className="profille-container">
            <div className="profille-header">
                <h5 className="title">profille</h5>
            </div>
            <div className="profille-contents">
                <div className="profille-photo">

                </div>
                <div className="profille-content">
                    <div className="profille-con">
                        <span>이름 :</span>
                        <input type="text" value={"홍길동"} readOnly></input>
                    </div>
                    <div className="profille-con-nickName">
                        <span>닉네임 :</span>
                        <input type="text" value={"나는야 홍길동"} readOnly></input>
                    </div>
                    <div className="profille-con">
                        <span>나이 :</span>
                        <input type="text" value={"25"} readOnly></input>
                    </div>
                    <div className="profille-con">
                        <span>성별 :</span>
                        <input type="radio" value={"남"} name="memberGender"/> <span>남</span>
                        <input type="radio" value={"여"} name="memberGender"/> <span>여</span>
                    </div>
                    <div className="profille-con-nickName">
                        <span>휴대폰 :</span>
                        <input type="text" value={"010-0000-1111"} readOnly></input>
                    </div>
                    <div className="profille-con-nickName">
                        <span>이메일 :</span>
                        <input type="text" value={"hong1234@naver.com"} readOnly></input>
                    </div>
                    <div className="profille-con">
                        <span>주소 :</span>
                        <input type="text" value={"서울특별시 강남"} readOnly></input>
                    </div>
                </div>
            </div>
            <div className="profille-footer">
                <h5>footer 생성 중 ~</h5>
            </div>
        </div>
    )
}

export default ProfilleDetail;