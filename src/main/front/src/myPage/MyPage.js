import axios from 'axios';
import './MyPage.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './Detail';
import Cate from './Cate';
import SideDetail from './SideDetail';

const MyPage = () =>{
    const navigate = useNavigate();

    const [categoryList , setCategoryList] = useState([])
    const cates = [{
        cateCode : ''
        , key : '' 
    }]
    const [cateCode , setCateCode] = useState('');
    const [cateColor , setCateColor] = useState(false);
   
    useEffect(() => {
        axios.get("/selectCate")
        .then(response => {
            console.log(response)
            setCategoryList(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div className="myPage-Main">
            <div className="myPage-Border1">
                <div className='myPage-Border3'>
                    <div className='myPage-Border5'>

                        {/* 프로필시작 */}
                        <div className='pro-header'>
                            <h5>Today : 1234</h5>
                            <h5>Total : 1231564</h5>
                        </div>

                        
                        <SideDetail cateList={cateCode}/>
                        
                    </div>
                </div>
            </div>
            <div className="myPage-Border2">
                <div className='myPage-Border4'>
                    <div className='myPage-Border6'>
                        <div className='pro-header2'>
                            <h5>추억저장소</h5>
                        </div>

                        <div className='pro-content2'>
                            <Detail cateList={cateCode} />
                        </div>
                    </div>
                </div>
            </div>
            {/* 카테고리 생성 */}
            <div className='category'>
                <ul>
                {
                    categoryList.map((category, idx) => {
                        return(
                            <li key={category.cateCode}>
                                 <a className='category-menu' onClick={() => {
                                    setCateCode({...cateCode , cateCode : category.cateCode , key : idx})
                                 }}>{category.cateName}</a>
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