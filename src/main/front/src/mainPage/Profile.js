import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import { useState } from 'react';
import axios from 'axios';

const Profille = () => {
    const memberVo = {
        memberId : '',
        memberPw : ''
    }
    const [memberList , setMemberList] = useState(memberVo);

    const check = (e) =>{
        setMemberList({...memberList , [e.target.name] : e.target.value})
    }

    const goLogin = () => {
        if(memberList.memberId == ''){
            alert("아이디를 입력해주세요")
            return;
        }
        if(memberList.memberPw == ''){
            alert("아이디를 입력해주세요")
            return;
        }
        
        axios.post("/member/memberLogin" , memberList)
        .then(response =>{
            console.log(response.data)
            alert(response.data.memberId + "님 반갑습니다.")
            navigator("/")
        })
        .catch(error => {
            console.log(error)
        })
    }
    const navigate = useNavigate();
    return (
        <div className="profille">
            <div className='login-header'>
                <h3>Login</h3>
            </div>
            <div className='login'>
                <input type="text" name="memberId" onChange={check}  placeholder="  아이디"/>
                <input type="password" name="memberPw" onChange={check}  placeholder="  비밀번호"/>
                <button type="button" onClick={goLogin}>로그인</button>
            </div>
            <div className='profille-footer'>
                <ul className="member-find">
                    <li><a>아이디 찾기</a> ／</li>
                    <li><a>비밀번호 찾기 </a> ／</li>
                    <li><a onClick={() => navigate("/goJoin")}>회원가입</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Profille;