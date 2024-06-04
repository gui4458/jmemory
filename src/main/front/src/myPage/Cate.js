import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cate = () => {

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
        <>
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
        </>
    )
}

export default Cate;