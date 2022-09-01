import { useState } from 'react'
import './alert.css'


const Message=(props)=>{
    const [toggle,setToggle]=useState(true)


    const close=()=>{
        setToggle(false)
    }

    return(
        <div className={toggle?"parent-message":"close"}>
            <div className='alert'>
                <h1>{props.message}</h1>
                <p className='message'>{props.description}</p>
                <button onClick={close}>ok</button>
            </div>
        </div>
    )
}
export default Message