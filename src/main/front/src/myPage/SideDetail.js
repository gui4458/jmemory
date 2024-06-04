import { useEffect, useState } from "react";
import HomeSide from "./HomeSide";
import DiarySide from "./DiarySide";

const SideDetail = (props) =>{
    const [isShowHome , setIsShowHome] = useState(true);
    const [isShowProfille ,setIsShowProfille] = useState(false);
    const [isShowDiary , setIsShowDiary] = useState(false);
    const [isShowPhoto , setIsShowPhoto] = useState(false);
    const [diaryCode , setDiaryCode] = useState('');

    useEffect(() => {
        console.log("!!!")
        if(props.cateList != ''){
            if(props.cateList.cateCode == 1){
                setIsShowHome(true)
                setIsShowProfille(false)
                setIsShowDiary(false)
                setIsShowPhoto(false)
            }
            if(props.cateList.cateCode == 2){
                setIsShowHome(false)
                setIsShowProfille(true)
                setIsShowDiary(false)
                setIsShowPhoto(false)
            }
            if(props.cateList.cateCode == 3){
                console.log("@@@@" + props.cateList.cateCode)
                setDiaryCode(props.cateList.cateCode)
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
            {isShowHome ? <HomeSide /> : ''}
            {isShowProfille ? <HomeSide /> : ''}
            {isShowDiary ? <DiarySide cateCode={props.cateList.cateCode} /> : ''}
            {diaryCode}
        </>
    )
}
export default SideDetail;