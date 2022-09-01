import { useEffect, useState } from 'react';
import './weekly.css'
import warning from '../../assets/img/Stroke/fi-rr-exclamation.svg'
import arrow from '../../assets/img/Stroke/fi-rr-arrow-small-up.svg'
import gold from '../../assets/img/Group (1).png'


const Weekly=()=>{
    const [cheader,setCheader]=useState({})
    const [clist,setClist]=useState([])
    // const [tags,setTags]=useState([])


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
            console.log(result[4])
            setCheader(result[4].header)
            setClist(result[4].list)
            // setTags(result[2].list.tags)

    })
        .catch(error => {
            // history('/login')
            console.log('error', error)
        });
        })
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
          
          function convertMsToTime(milliseconds) {
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let day = Math.floor(hours / 24);
          
            seconds = seconds % 60;
            minutes = minutes % 60;
            hours = hours % 24;
            day = day % 30;
            console.log(`${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
                seconds,
              )}`)

            return `${padTo2Digits(day)}:${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
              seconds,
            )}`;
          }

    return(
        <div>
            <div className="challange">
                <div className="head">
                    <h3>{cheader.title}</h3>
                    <a href="/">{cheader.moreTitle}</a>
                </div>
                <div className="challange-item">
                    {
                    clist.map((n,index)=>{
                    return(
                    <div className="citem" key={index}>
                        <div className='weekly'>
                            <div>
                            <img src={`https://techwich.co${n.icon}`} alt=""/>
                            <h4>{n.name}</h4>
                            </div>
                            <div>
                            <img src={arrow} alt='arrow'/>
                            <img src={gold} alt='gold'/>
                            </div>
                        </div>
                        <div className='warning'>
                            <img src={warning} alt='warning' />
                            <p>{n.hint}</p>
                        </div>
                        
                        <div className='details'>
                           <div className='count-down'>
                            {
                                convertMsToTime(n.startTime)
                            }
                           </div>
                           <div className='rank'>{n.rank.rankChangedCount}</div>
                        </div>
                    </div>) 
                   })
                   }
                </div>
            </div>

        </div>
    )
    
}

export default Weekly