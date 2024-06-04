import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profille = () => {
    const [member, setMember] = useState({
        memberId: '',
        memberPw: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [memberInfo, setMemberInfo] = useState(null);

    const { memberId, memberPw } = member;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/member/status")
            .then(response => {
                if (response.data.isAuthenticated) {
                    setIsAuthenticated(true);
                    setMemberInfo(response.data.memberInfo);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const loginOnChange = (e) => {
        const { value, name } = e.target;
        setMember({
            ...member,
            [name]: value
        });
        console.log(member);
    };

    const goLogin = () => {
        if (memberId === '') {
            alert("아이디를 입력해주세요");
            return;
        }
        if (memberPw === '') {
            alert("비밀번호를 입력해주세요");
            return;
        }

        axios.post("/member/login", {
            'memberId': memberId,
            'memberPw': memberPw
        })
        .then(response => {
            alert(memberId + "님 반갑습니다.");
            setIsAuthenticated(true);
            setMemberInfo(response.data);
            navigate("/");
        })
        .catch(error => {
            console.log(error);
            alert("로그인 실패");
        });
    };

    const goLogout = () => {
        axios.post("/member/logout")
        .then(response => {
            alert("로그아웃 되었습니다.");
            setIsAuthenticated(false);
            setMemberInfo(null);
            setMember({
                memberId: '',
                memberPw: ''
            });
            navigate("/");
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="profille">
            <div className='login-header'>
                <h3>{isAuthenticated ? "Profile" : "Login"}</h3>
            </div>
            <div className='login'>
                {!isAuthenticated ? (
                    <>
                        <input type="text" name="memberId" onChange={loginOnChange} placeholder="  아이디" />
                        <input type="password" name="memberPw" onChange={loginOnChange} placeholder="  비밀번호" />
                        <button type="button" onClick={goLogin}>로그인</button>
                    </>
                ) : (
                    <>
                        <div>
                            <p>회원 아이디: {memberInfo.memberId}</p>
                            <p>회원 이름: {memberInfo.memberName}</p>
                            <p>회원 닉네임: {memberInfo.memberNickname}</p>
                        </div>
                        <button type="button" onClick={goLogout}>로그아웃</button>
                    </>
                )}
            </div>
            <div className='profille-footer'>
                {!isAuthenticated && (
                    <ul className="member-find">
                        <li><a>아이디 찾기</a> ／</li>
                        <li><a>비밀번호 찾기 </a> ／</li>
                        <li><a onClick={() => navigate("/goJoin")}>회원가입</a></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Profille;