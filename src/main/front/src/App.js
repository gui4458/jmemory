import './App.css';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import MemberPage from './components/MemberPage';
import MemberJoinPage from './components/MemberJoinPage';

import Header from './mainPage/Header';
import Notice from './mainPage/Notice';
import Profille from './mainPage/Profile';
import Footer from './mainPage/Footer';
import MainHomePage from './mainPage/MainHomePage';
import MyPage from './myPage/MyPage';

function App() {
    const navigate = useNavigate();


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<MainHomePage />} />
                <Route path='/detail' element={<MemberPage/>} />
                <Route path='/goJoin' element={<MemberJoinPage navigate={navigate}/>} />
                <Route path='/myHomePage' element={<MyPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
