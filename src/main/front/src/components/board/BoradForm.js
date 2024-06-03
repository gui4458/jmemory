const BoradForm = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month + '-' + day;

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            글쓰기
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {dateString}
                        </div>
                        <div className="col">
                            <select defaultValue={'사진'}>
                                <option value={'게시글'}>게시글</option>
                                <option value={'사진'}>사진</option>
                                <option>동영상</option>
                                <option>일기</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col">
                            이미지첨부
                        </div>
                        <div className="col">
                            동영상첨부
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <textarea cols={80} rows={15}></textarea>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-6">
                            공개설정
                        </div>
                        <div className="col-6">
                            <select>
                                
                            </select>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoradForm;