import axios from "axios"

const PlusBtn = (props) =>{
    console.log(props.albumCode)

    const albumDelete = () =>{
        axios.delete(`/delete/${props.albumCode}`)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return(
        <>
            <button type="button" >수정</button>
            <button type="button" onClick={albumDelete}>삭제</button>
        </>
    )
}

export default PlusBtn;