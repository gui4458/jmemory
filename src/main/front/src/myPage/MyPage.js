import axios from 'axios';
import './MyPage.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './Detail';
import MyPageBoard1 from './MypageBoard1';
import MyPageBoard2 from './MyPageBoard2';
import MyPageBoard from './MypageBoard';
import E1 from './E1';

const MyPage = () =>{

    const navigate = useNavigate();

    const [categoryList , setCategoryList] = useState([])

    useEffect(() => {
        axios.get("/selectCate")
        .then(response => {
            console.log(response)
            setCategoryList(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    
    const goCate = () =>{

    }
    return(
        <div className="myPage-Main">
            <Routes>
                <Route path='/' element={<MyPageBoard />} />
                <Route path='/E1' element={<E1 />} />
            </Routes>
            {/* 카테고리 생성 */}
            <div className='category'>
                <ul>
                {
                    categoryList.map((category, idx) => {
                        return(
                            <li key={category.cateCode}>
                                {/* <a className='category-menu' onClick={() => navigate(`/cateDetail/${category.cateCode}`)}>{category.cateName}</a> */}
                                <a className='category-menu' onClick={() => navigate('/E1')}>qqqq</a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default MyPage;