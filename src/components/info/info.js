import { useEffect, useState } from 'react';
import './info.css'




const Info=()=>{
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const [assets,setAssets]=useState([])
    const [levelStatistic,setLevelStatistic]=useState({})
    const [user,setUser]=useState({})
    const [color,setColor]=useState([])


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
            setAssets(result[0].assets)
            setLevelStatistic(result[0].levelStatistic)
            setUser(result[0].user)
           
            setColor(result[0].connectionCount)
    
    })
        .catch(error => {
            // history('/login')
            console.log('error', error)
        });
        })
      
    return(
        <div className='information'>
            <div className='info-litems'>
                <div className='user-info'>
                        <div className='profile'>
                            <img src={`https://techwich.co${user.profilePicture}`} alt="userprofile"/>
                            <div>
                                <h2>{user.firstName}<br/>{user.lastName}</h2>
                                <div className='level'><p>Level</p><span>{user.level}</span></div>
                            </div>
                        </div>
                        <div className='statistics'>
                            <div>
                                <span>Streak</span>
                                <p><strong>{levelStatistic.currentStreak}</strong>/{levelStatistic.maxStreak}</p>
                            </div>
                            <div>
                                <span>ForumActivity</span>
                                <p><strong>{levelStatistic.currentForumActivity}</strong>/{levelStatistic.maxForumActivity}</p>
                            </div>
                            <div>
                                <span>Points</span>
                                <p><strong>{levelStatistic.currentPoints}</strong>/{levelStatistic.maxPoints}</p>
                            </div>
                        </div>
                        <div className='conection'>
                            {
                                arr.map(n=>{
                                    return(
                                        <span key={n} style={{background:n<=color&&'#7983FF'}}></span>
                                    )
                                })
                            }
                        </div>
                </div>
                <div className='number'>
                    {
                        <ul>
                            {
                                assets.map(n=>{
                                    return(
                                        <li>
                                            <img src={`https://techwich.co${n.lightIcon}`} alt=""/>
                                            <span>{n.value}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Info