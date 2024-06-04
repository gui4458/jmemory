import { useParams } from "react-router-dom";
import MyPage from "./MyPage";
import { useEffect, useState } from "react";
import { forEach, set } from "lodash";
import Home from "./Home";
import ProfilleDetail from "./ProfilleDetail";
import Diary from "./Diary";
import Photo from "./Photo";

const Detail = (props) =>{
    console.log(props);
    console.log(props.cateList.cateCode);
    const [isShowHome , setIsShowHome] = useState(true);
    const [isShowProfille ,setIsShowProfille] = useState(false);
    const [isShowDiary , setIsShowDiary] = useState(false);
    const [isShowPhoto , setIsShowPhoto] = useState(false);
    const [cateCode , setCateCode] = useState('');

    
    useEffect(() => {
        console.log("!!!")
        if(props.cateList != ''){
            if(props.cateList.cateCode == 1){
                setIsShowHome(true)
                setIsShowProfille(false)
                setIsShowDiary(false)
                setIsShowPhoto(false)
                console.log("!!!!!!" + cateCode)
            }
            if(props.cateList.cateCode == 2){
                setIsShowHome(false)
                setIsShowProfille(true)
                setIsShowDiary(false)
                setIsShowPhoto(false)
            }
            if(props.cateList.cateCode == 3){
                setIsShowDiary(true)
                setIsShowHome(false)
                setIsShowProfille(false)
                setIsShowPhoto(false)
            }
            if(props.cateList.cateCode == 4){
                setIsShowPhoto(true)
                setIsShowDiary(false)
                setIsShowHome(false)
                setIsShowProfille(false)
            }
        }
    })
    return(
        <>
            { isShowHome ? <Home /> : ''}
            { isShowProfille ? <ProfilleDetail/> : ''}
            { isShowDiary ? <Diary/> : ''}
            { isShowPhoto ? <Photo/> : ''}
        </>
       
    )
}
export default Detail;