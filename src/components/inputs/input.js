import './input.css'


const Input=(props)=>{
    return(
        <div className="input-box">
            <label className="label">{props.label}</label>
            <div className="inp">
                <input type={props.type} onChange={props.change} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder}/>
                <span className="hide" onClick={props.click} >{props.icon ? <img src={props.icon} alt={props.alt}/>:null}</span>
            </div>
        </div>
    )
}


export default Input