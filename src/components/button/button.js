import './button.css'


const Btn=(props)=>{
    return(
        <button className="btn" disabled={props.disable} style={props.style}>{props.icon?<img src={props.icon} alt={props.alt}/>:null} {props.btntitle}</button>
    )
}

export default Btn