import './MyPage.css';

const MyPage = () =>{
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
                        
                        <div className='pro-content'>
                            <div className='todayIs'>
                                <h5>todat is : 좋음</h5>
                            </div>
                            <div className='photo'>
                                <h3>사진</h3>
                            </div>
                            <div className='stu-mes'>
                                <h5>ㄴr 는 오i롭ㄷr</h5>
                            </div>
                            <div className='pro-footer'>
                                <h5>JMEMORY</h5>
                                <h5>a1234@naver.com</h5>
                            </div>
                        </div>
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
                            
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default MyPage;