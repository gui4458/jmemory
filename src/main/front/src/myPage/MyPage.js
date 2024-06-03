import axios from 'axios';
import './MyPage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import MyPageBoard1 from './MypageBoard1';
import MyPageBoard2 from './MyPageBoard2';

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
            <MyPageBoard1 />
            <MyPageBoard2/>
            {/* 카테고리 생성 */}
            <div className='category'>
                <ul>
                {
                    categoryList.map((category, idx) => {
                        return(
                            <li key={category.cateCode}>
                                <a className='category-menu' onClick={() => navigate(`/cateDetail/${category.cateCode}`)}>{category.cateName}</a>
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