import axios from "axios";
import { useEffect, useRef, useState } from "react"
import PlusBtn from "./btnFolder/PlusBtn";
import FolderBtn from "./btnFolder/FolderBtn";
import BackBtn from "./btnFolder/BackBtn";

const DiarySide = (cateCode) => {

    console.log("@@@@@" + cateCode.cateCode)

    const [albumList , setAlbumList] = useState([])
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
            console.log(response.data)
            setAlbumList(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const [albumName , setAlbumName] = useState({
        albumName : ''
    })

    const changeName = (e) =>{
        setAlbumName({...albumName , [e.target.name] : e.target.value})
    }

    const goChangeName = () => {
        axios.post("/updateAlbumName", albumName)
        .then(response => {
            
        })
        .catch(error =>{

        })
    }
    const plusBtn = () => {
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
                        albumList.map(album => {
                            return(                               
                                <li key={album.albumCode}>
                                    <span className="folder-icon"><img src={process.env.PUBLIC_URL + '/images/folderIcon.png'}/></span>
                                    <a>{
                                      album.albumCode !=1 && isShow ? <input type="text" onChange={changeName} defaultValue={album.albumName} placeholder={album.albumName} name="albumName"/>
                                    : album.albumName}</a>
                                    {                                        
                                       album.albumCode !=1 && isShow ? <PlusBtn albumCode={album.albumCode}/> : ''
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