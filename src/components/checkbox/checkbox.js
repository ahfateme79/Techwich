import './checkbox.css'
import check from '../../assets/img/Fully/fi-sr-check.svg'

const Checkbox=()=>{
    return(
        <div className="agree">
            <label className="checkbox">
            <input type="checkbox" id='checkbox'/>
            <span className="tick"><img src={check} alt="check"/></span>
            </label>
            <p>i agree with all <a href="/">Terms</a>,<a href="/">Privacy Policy</a></p>
        </div>
    )
}

export default Checkbox