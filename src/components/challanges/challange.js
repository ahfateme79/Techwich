import { useEffect, useState } from 'react';
import './challange.css'
import gift from '../../assets/img/Stroke/fi-rr-gift.svg'


const Challange=()=>{
    const [cheader,setCheader]=useState({})
    const [clist,setClist]=useState([])
    // const [day,setDay]=useState(0)
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
            setCheader(result[2].header)
            setClist(result[2].list)
            // setTags(result[2].list.tags)


            // const ms=clist.map(n=>{
            //     return n.leftTime
            // })

                   
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
            // const time = deadline -milliseconds ;

            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let day = Math.floor(hours / 24);
          
            seconds = seconds % 60;
            minutes = minutes % 60;
            hours = hours % 24;
            day = day % 30;

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
                        <div className='introduce'>
                            <img src={`https://techwich.co${n.icon}`} alt=""/>
                            <div>
                            <h4>{n.title}</h4>
                            <p>{n.subtitle}</p>
                            </div>
                        </div>
                        <div className='tags'>
                            {
                            n.tags?n.tags.map(h=>{
                                return <a href='/'>{h.title}</a>
                            }):<p>no tags</p>
                           }
                        </div>
                        <div className='details'>
                           <div className='gift'>
                            <img src={gift} alt=''/>
                            <p>${n.gift}</p><span>gift</span>
                           </div>
                           <div className='count-down'>
                           {
                                convertMsToTime(n.startTime)

                            
                        }
                           </div>
                        </div>
                    </div>) 
                   })
                   }
                </div>
            </div>

        </div>
    )
    
}

export default Challange