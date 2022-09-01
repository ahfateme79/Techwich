import { useEffect, useState } from 'react';
import './comptition.css'


const Comptition=()=>{
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
            setComheader(result[3].header)
            setComlist(result[3].list)

    })
        .catch(error => {
            // history('/login')
            console.log('error', error)
        });
        })

    return(
        <div>
            { <div className="comptition">
                <div className="head">
                    <h3>{comheader.title}</h3>
                    <a href="/">{comheader.moreTitle}</a>
                </div>
                <div className="comptition-item">
                    {
                    comlist.map((n,index)=>{
                    return(
                    <div className="comp-items" key={index}>
                        <div className='comptition-head'>
                            <h4>{n.title}</h4>
                        </div>
                        <div className='comptition-users'>
                          <div className='comptition-user'>
                                <figure>
                                    <img src={`https://techwich.co${n.user.profilePicture}`} alt="userimage"/>
                                    <figcaption>{n.user.username}</figcaption>
                                </figure>
                          </div>
                          <div>
                            <p className='vs'>Vs.</p>
                          </div>
                          <div className='comptition-user'>
                                <figure>
                                    <img src={`https://techwich.co${n.opponent.profilePicture}`} alt="userimage"/>
                                    <figcaption>{n.opponent.username}</figcaption>
                                </figure>
                          </div>
                        </div>
                        <div className='btns'>
                            <button className='accept'>Accept & join</button>
                            <button className='reject'>Reject</button>
                        </div>
                    </div>) 
                   })
                   }
                </div>
            </div> }

        </div>
    )
    
}

export default Comptition