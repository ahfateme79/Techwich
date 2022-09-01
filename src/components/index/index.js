import { useEffect } from 'react';
// import { ReactSession }  from 'react-client-session';
import { useNavigate } from 'react-router-dom';


const Index=()=>{

    const token=localStorage.getItem('token')
    console.log(token)
    const history=useNavigate()
    useEffect(()=>{
        history('/explore')

    })

    return(
        <h1>index</h1>
    )
}


export default Index