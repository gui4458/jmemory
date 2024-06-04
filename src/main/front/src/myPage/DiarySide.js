const DiarySide = (cateCode) => {

    console.log("@@@@@" + cateCode.cateCode)
    alert(cateCode.cateCode)

    return(
        <div className="diarySide-container">
            <div className="diarySide-title">
                <h5>Diary Album</h5>
            </div>
            <div className="diarySide-content">
                
            </div>
            <div className="diarySide-footer">
                <button type="button" onClick={() => {

                }}>폴더관리하기</button>
            </div>
        </div>
    )
}
export default DiarySide;