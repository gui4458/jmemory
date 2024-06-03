import { useParams } from "react-router-dom";
import MyPageBoard1 from "./MypageBoard1";
import MyPageBoard2 from "./MyPageBoard2";
import MyPage from "./MyPage";

const Detail = () =>{
    const {cateCode} = useParams();
    console.log(cateCode);
    return(
        <>
         <MyPage/>
        </>
       
    )
}
export default Detail;