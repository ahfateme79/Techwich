import './login.css'
import logo from '../../assets/img/logo/techwich_logo_and_title.png'
import Btn from "../../components/button/button"
import Input from "../../components/inputs/input"
import hide from '../../assets/img/Fully/fi-sr-eye-crossed.svg'
import show from '../../assets/img/Fully/fi-sr-eye.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const formdata=[
    {
        label:'Email',
        type:'email',
        name:'email',
        id:'email',
        placeholder:'Placeholder',
    },
    {
        label:'Password',
        type:'password',
        name:'password',
        id:'password',
        placeholder:'password',
        icon:hide,
        show:show,
        mode:false,
    },
]



const Login=()=>{



    const [ToggleState, setToggleState] = useState(false);

    const history=useNavigate()

    const handleclick=()=>{
        setToggleState(!ToggleState)
    }

    const [info,setInfo]=useState({
        email:"",
        password:"",
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
      };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('loged in')
        history('/explore')
      };


    return(
        <div className="gradiant-bg">
            <div className="bg-gray">
                <div className="Logo">
                    <img src={logo} alt="LOGO"/>
                </div>
                <div>
            <h3 className="haeding">Lets Get Start,Register Now</h3>
        <form onSubmit={handlesubmit}>
            <div>
            <Input label={formdata[0].label} value={info.username} change={handlechange} type={ToggleState?'text':formdata[0].type}  name={formdata[0].name} id={formdata[0].id} placeholder={formdata[0].placeholder} />
            <Input label={formdata[1].label} value={info.password} change={handlechange} type={ToggleState?'text':formdata[1].type} name={formdata[1].name} id={formdata[1].id} placeholder={formdata[1].placeholder} icon={ToggleState? formdata[1].show:formdata[1].icon} alt={formdata[1].name} click={handleclick}/>
                <div className='forgot-pass'><a href='/password'>Forgot Password</a></div>
            </div>
            <div>
                <Btn btntitle='login' disable={false} style={{background:'linear-gradient(to right,#7983FF,#cd17ff)',color:'#fff'}}></Btn>
            </div>
            
            <div>
                <p className="choose">or continue with</p>
            </div>
            <div style={{margin:'20px 0'}}>
            <Btn btntitle='Login with google' disable={false}  style={{background:'transparent',color:'#7983FF',border:'1px solid #7983FF'}}/>
            <Btn btntitle='Login with Facebook' disable={false} style={{background:'transparent',color:'#7983FF',border:'1px solid #7983FF'}}/>
            </div>
        </form>
        </div>
        <div className='link'>
            <p>Don't have an account?</p><a href='/register'> Register</a>
        </div>

            </div>
        </div>
        
    )
}

export default Login