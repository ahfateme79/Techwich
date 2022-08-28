import {useNavigate} from "react-router-dom";
import { useState } from "react";
import Input from "../inputs/input"
import './form.css'
import hide from '../../assets/img/Fully/fi-sr-eye-crossed.svg'
import show from '../../assets/img/Fully/fi-sr-eye.svg'
import Btn from "../button/button";
import Checkbox from "../checkbox/checkbox";
import { ReactSession }  from 'react-client-session';


const formdata=[
    {
        label:'Username',
        type:'text',
        name:'username',
        id:'username',
        placeholder:'username',
    },
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
    {
        label:'Repeat Password',
        type:'password',
        name:'cpassword',
        id:'cpassword',
        placeholder:'password',
        icon:hide,
        show:show,
        mode:false,
    },
]


const Form=()=>{

    const history=useNavigate();

    const [ToggleState, setToggleState] = useState(false);
    const [ToggleStatec, setToggleStatec] = useState(false);

    const handleclick=()=>{
        setToggleState(!ToggleState)
    }

    const chandleclick=()=>{
        setToggleStatec(!ToggleStatec)
    }

    const [info,setInfo]=useState({
        username:"",
        email:"",
        password:"",
    })
    const [cpassword,setCpassword]=useState('')
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    const handlechange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
      };
      const handlechange2 = (e) => {
       setCpassword(e.target.value)
       setIsCPasswordDirty(true);
      };
    const handlesubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        // var raw = JSON.stringify({
        //   "username": "mohammad_juniorr",
        //   "email": "mohback90@gmail.com",
        //   "password": "TsT!@123456"
        // });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(info),
          redirect: 'follow'
        };
        if (isCPasswordDirty && cpassword===info.password) {
        fetch("https://techwich.co/users/register", requestOptions)
          .then((res) => res.json())
          .then((result) => {
                        ReactSession.setStoreType("localStorage");
                        ReactSession.set('data',JSON.stringify(info))
                        if (result.status==='ok') {
                            fetch("https://techwich.co/users/send_verify_email", requestOptions)
                                .then(response => response.json())
                                .then(resultt => console.log(resultt))
                                .catch(error => alert('error', error.message));
                                history('/verify')
                    }else {
                    alert('error')
                    history('/')
                }
          })
          .catch(error =>{
            alert('error', error.message)
          })
        }else{
            alert('error')
        }
      };

      const [check,setCheck]=useState(false)

      const handlecchecked=(e)=>{
        setCheck(e.target.checked)
        console.log(e.target.checked)
      }



    return(
        <div>
            <h3 className="haeding">Lets Get Start,Register Now</h3>
        <form onSubmit={handlesubmit}>
            <div>
            <Input label={formdata[0].label} value={info.username} change={handlechange} type={ToggleState?'text':formdata[0].type}  name={formdata[0].name} id={formdata[0].id} placeholder={formdata[0].placeholder} />
            <Input label={formdata[1].label} value={info.email} change={handlechange} type={ToggleState?'text':formdata[1].type}  name={formdata[1].name} id={formdata[1].id} placeholder={formdata[1].placeholder} />
            <Input label={formdata[2].label} value={info.password} change={handlechange} type={ToggleState?'text':formdata[2].type} name={formdata[2].name} id={formdata[2].id} placeholder={formdata[2].placeholder} icon={ToggleState? formdata[2].show:formdata[2].icon} alt={formdata[2].name} click={handleclick}/>
            <Input label={formdata[3].label} value={cpassword} change={handlechange2} type={ToggleStatec?'text':formdata[3].type} name={formdata[3].name} id={formdata[3].id} placeholder={formdata[3].placeholder} icon={ToggleStatec? formdata[3].show:formdata[3].icon} alt={formdata[3].name} click={chandleclick}/>

            </div>

            <div>
                <Checkbox checked={check} changes={handlecchecked}/>
                <Btn btntitle='Register' disable={check?false:true} style={{background:'linear-gradient(to right,#7983FF,#cd17ff)',color:'#fff',opacity:check?'1':'.5'}}/>
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
    )
}

export default Form