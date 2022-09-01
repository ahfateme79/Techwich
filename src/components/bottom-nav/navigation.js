import file from '../../assets/img/Stroke/fi-rr-file.svg'
import book from '../../assets/img/Stroke/fi-rr-book-alt.svg'
import apps from '../../assets/img/Stroke/fi-rr-apps.svg'
import comments from '../../assets/img/Stroke/fi-rr-comments.svg'
import user from '../../assets/img/Stroke/fi-rr-user.svg'
import { Link } from 'react-router-dom'
import './navigation.css'

const icons=[file,book,apps,comments,user]




const Navigation=()=>{
    return(
        <div className='navigation'>
            <nav>
                <ul>
                 
                     <li><Link to='/'><img src={icons[0]} alt=''/></Link></li>
                     <li className="active"><Link to='/'><img src={icons[1]} alt=''/></Link></li>
                     <li><Link to='/'><img src={icons[2]} alt=''/></Link></li>
                     <li><Link to='/'><img src={icons[3]} alt=''/></Link></li>
                     <li><Link to='/'><img src={icons[4]} alt=''/></Link></li>

                </ul>
            </nav>
        </div>
    )
}


export default Navigation