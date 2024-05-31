import { useState } from "react";

const MemberJoinPage = (navigate) => {
    let [member,setMember] = useState({'memberId' : '',
                                        'memberPw' : '',
                                        'memberName' : '',
                                        'memberNickname' : '',
                                        'memberGender' : '',
                                        'memberEmail' : '',
                                        'memberTel' : '',
                                        'memberAddr' : '',
                                        'postCode' : '',
                                        'addrDetail' : ''
    });

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div>회원가입</div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>ID : {member.memberId}</div>
                            <div>PW : {member.memberPw}</div>
                            <div>NAME : {member.memberName}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <button className='btn btn-primary' onClick={() =>
                                    navigate('/')
                                }>메인으로</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default MemberJoinPage;