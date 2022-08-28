import { useState } from 'react'
import logo from '../../assets/img/logo/techwich_logo_and_title.png'
import './verify.css'
import { ReactSession } from 'react-client-session';
import Btn from '../../components/button/button';
import Input from '../../components/inputs/input';






const Verify=()=>{
    let user=JSON.parse(ReactSession.get('data'))
    console.log(user.username)
    const [state,setState]=useState("")
    const handlechange = (e) => {
        setState(e.target.value);
      };

      const info={
        username:user.username,
        otp:state
      }
      const handlesubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(info),
          redirect: 'follow'
        };
        // console.log(r)

        fetch("https://techwich.co/users/verify_email", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      };

    return(
        <div className="gradiant-bg">
        <div className="bg-gray">
            <div className="Logo">
                <img src={logo} alt="LOGO"/>
            </div>
            <h3 className="haeding">Verify your email</h3>
            <form onSubmit={handlesubmit}>
                <div>
                    <div>
                    <Input value={state} change={handlechange} type="text" placeholder="Write verify code" />

                        {/* <input type="text" value={state} onChange={handlechange}/> */}
                        <Btn btntitle='Verify Email' disable={false} style={{background:'linear-gradient(to right,#7983FF,#cd17ff)',color:'#fff'}}/>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )

}

export default Verify