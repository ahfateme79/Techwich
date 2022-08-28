import './alert.css'


const Message=(props)=>{
    return(
        <div className="parent-message">
            <div className='alert'>
                <h1>{props.message}</h1>
                <p className='message'>{props.description}</p>
                <button>ok</button>
            </div>
        </div>
    )
}
export default Message