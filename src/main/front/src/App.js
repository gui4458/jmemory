import './App.css';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import MemberPage from './components/MemberPage';
import MemberJoinPage from './components/MemberJoinPage';

import Header from './mainPage/Header';

function App() {
    const navigate = useNavigate();


    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/detail' element={<MemberPage/>} />
                <Route path='/goJoin' element={<MemberJoinPage navigate={navigate}/>} />

            </Routes>


           
        </div>
    );
}

export default App;
