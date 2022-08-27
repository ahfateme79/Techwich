import Form from "../../components/form/form"
import './register.css'
import logo from '../../assets/img/logo/techwich_logo_and_title.png'



const Register=()=>{
    return(
        <div className="gradiant-bg">
            <div className="bg-gray">
                <div className="Logo">
                    <img src={logo} alt="LOGO"/>
                </div>
            <Form/>
            </div>
        </div>
        
    )
}

export default Register