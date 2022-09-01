import { useEffect, useState } from 'react';
import './super.css'
import edit from '../../assets/img/Stroke/fi-rr-edit.svg'
import arrow from '../../assets/img/Stroke/fi-rr-arrow-small-up.svg'
import jam from '../../assets/img/image 68.png'



const Super=()=>{
    const [comheader,setComheader]=useState({})
    const [comlist,setComlist]=useState([])


    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("sessionKey", "bd04db31-aa8b-4ae4-973a-bcf21dd51143");
        myHeaders.append("languageKey", "en");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://techwich.co/api/content/explore", requestOptions)
        .then(response => response.json())
        .then(result =>{
            // console.log(result[5])
            setComheader(result[5].header)
            setComlist(result[5].list)

    })
        .catch(error => {
            // history('/login')
            console.log('error', error)
        });
        })

    return(
        <div>
            { <div className="super">
                <div className="head">
                    <h3>{comheader.title}</h3>
                    <a href="/">{comheader.moreTitle}</a>
                </div>
                <div className="super-item">
                    {
                    comlist.map((n,index)=>{
                    return(
                    <div className="super-items" key={index}>
                        <div className='icons-display'>
                            <button><img src={edit} alt='edit'/></button>
                            <div>
                            <img src={arrow} alt='arrow'/>
                            <img src={jam} alt='jam'/>
                            </div>
                        </div>
                        <div className='super-head'>
                        <img src={`https://techwich.co${n.icon}`} alt=""/>
                            <h4>{n.name}</h4>
                            <p>{n.message}</p>
                        </div>
                        <div className='team'>
                            {
                                n.team.map(h=>{
                                    return(
                                        <figure>
                                            <img src={`https://techwich.co${h.profilePicture}`} alt="userimage"/>
                                    <figcaption>{h.username}</figcaption>
                                        </figure>
                                    )
                                })
                            }
                        </div>
                        <div className='rank-display'><div className='rank'>{n.rank.rankChangedCount}</div></div>
                        <div className='btnss'>
                            <button className='accept'>Team chat</button>
                        </div>
                    </div>) 
                   })
                   }
                </div>
            </div> }

        </div>
    )
    
}

export default Super