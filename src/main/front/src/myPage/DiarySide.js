import axios from "axios";
import { useEffect, useRef, useState } from "react"
import PlusBtn from "./btnFolder/PlusBtn";
import FolderBtn from "./btnFolder/FolderBtn";
import BackBtn from "./btnFolder/BackBtn";

const DiarySide = (cateCode) => {

    console.log("@@@@@" + cateCode.cateCode)

    const [albumList , setAlbumList] = useState({
        albumName : ''
        , albumCode: ''
    })

    const [albums , setAlbums] = useState([])
    const [btnName , setBtnName] = useState('폴더관리하기')
    
    const clickBtn = e =>{
        const { name } = e.target
        setBtnName('되돌아가기')
        setIsShow(true)
    }
    const [isShow , setIsShow] = useState(false);
   
    useEffect(() => {
        axios.get(`/selectAlbum/${cateCode.cateCode}`)
        .then(response => {
            console.log("@@@@@@<!!!!!" + response.data)
            setAlbums(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const changeName = (e) =>{
        setAlbumList({...albumList , [e.target.name] : e.target.value})
        console.log(e.target.value);
    }

    const selectBtnComponent = {
        '폴더관리하기' : <FolderBtn setIsShow={setIsShow} setBtnName={setBtnName}/>,
        '되돌아가기' : <BackBtn setIsShow={setIsShow} setBtnName={setBtnName}/>
    }
    return(
        <div className="diarySide-container">
            <div className="diarySide-title">
                <h5>Diary Album</h5>
            </div>
            <div className="diarySide-content">
                <ul>
                    {
                        albums.map(album => {
                            return(                               
                                <li key={album.albumCode}>
                                    <span className="folder-icon"><img src={process.env.PUBLIC_URL + '/images/folderIcon.png'}/></span>
                                    <a>{
                                      album.albumCode !=1 && isShow ? <input type="text" onChange={changeName} defaultValue={album.albumName} placeholder={album.albumName} name="albumName"/>
                                    : album.albumName}</a>
                                    {                                        
                                       album.albumCode !=1 && isShow ? <PlusBtn albumCode={album.albumCode} albumList={albumList}/> : ''
                                    }
                                </li>
                            )
                            
                        })
                    }
                </ul>
            </div>
            <div className="diarySide-footer">
                {
                    btnName ? [selectBtnComponent[btnName]] : ''
                }
            </div>
        </div>
    )
}
export default DiarySide;