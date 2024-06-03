import './App.css';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Header from './mainPage/Header';
import Notice from './mainPage/Notice';
import Profille from './mainPage/Profile';
import Footer from './mainPage/Footer';
import MainHomePage from './mainPage/MainHomePage';
import MyPage from './myPage/MyPage';
import MemberPage from './components/member/MemberPage';
import MemberJoinPage from './components/member/MemberJoinPage';
import BoradForm from './components/board/BoradForm';
import Detail from './myPage/Detail';

function App() {
    const navigate = useNavigate();


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainHomePage />} />
                <Route path='/detail' element={<MemberPage/>} />
                <Route path='/goJoin' element={<MemberJoinPage navigate={navigate}/>} />
                <Route path='/myHomePage' element={<MyPage/>}/>
                <Route path='/boardForm' element={<BoradForm/>}/>
                <Route path='/cateDetail/:cateCode' element={<Detail />}></Route>
            </Routes>
        </div>
    );
}

export default App;
