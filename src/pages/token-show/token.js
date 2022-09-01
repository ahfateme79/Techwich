import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo/techwich_logo_and_title.png'
import Btn from '../../components/button/button';




const Token=()=>{
    const history=useNavigate()
    const handleclick=()=>{
        const token=ReactSession.get('token')
        if (token) {
            history('/explore')
        }else{
            history('/login')
        }
    }
    return(
        <div className="gradiant-bg">
        <div className="bg-gray">
            <div className="Logo">
                <img src={logo} alt="LOGO"/>
            </div>
            <h3 className="haeding">Your sesstionkey</h3>
            <p>{ReactSession.get('token')}</p>
            <button onClick={handleclick}>go to explore</button>
            <Btn btntitle='Go to explore' onClick={handleclick} disable={false} style={{background:'linear-gradient(to right,#7983FF,#cd17ff)',color:'#fff'}}/>
        </div>
    </div>
    )
}

export default Token