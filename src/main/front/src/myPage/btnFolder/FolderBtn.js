const FolderBtn = (props) =>{
    console.log(props)
    
    const BackBtn = () =>{
        props.setIsShow(true)
        props.setBtnName('되돌아가기')
    }
    return(
        <>
            <button type="button" onClick={BackBtn}>폴더관리하기</button>
        </>
    )
}
export default FolderBtn;