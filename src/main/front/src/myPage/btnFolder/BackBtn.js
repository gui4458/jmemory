const BackBtn = (props) =>{

    const AfterBtn = () =>{
        props.setIsShow(false)
        props.setBtnName('폴더관리하기')
    }
    return(
        <>
            <button type="button" onClick={AfterBtn}>되돌아가기</button>
        </>
    )
}
export default BackBtn;