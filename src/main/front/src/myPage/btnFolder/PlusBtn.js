import axios from "axios"
import { useState } from "react"

const PlusBtn = ({abCode, albumList}) =>{
    console.log(abCode)
    console.log("!!!!!%%%%" + albumList.albumName)

    const [albums , setAlbums] = useState(albumList)
    const albumDelete = () =>{
        axios.delete(`/delete/${abCode}`)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const goChangeName = () => {
        setAlbums({...albums, [albums.albumCode] : abCode})
        axios.post("/updateAlbumName", albums)
        .then(response => {
            
        })
        .catch(error =>{

        })
        console.log("%%%%%" + albums.albumName)
        console.log("%%%%%!!!!!!" + albums.albumCode)
    }
    return(
        <>
            <button type="button" onClick={goChangeName}>수정</button>
            <button type="button" onClick={albumDelete}>삭제</button>
        </>
    )
}

export default PlusBtn;