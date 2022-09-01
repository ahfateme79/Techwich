import Search from "../../components/search/search"
import bell from '../../assets/img/Stroke/fi-rr-bell-ring.svg'
import email from '../../assets/img/Stroke/fi-rr-envelope-ban.svg'
import './explore.css'
import Navigation from "../../components/bottom-nav/navigation"
import { useEffect, useState } from "react"
import Challange from "../../components/challanges/challange"
import Comptition from "../../components/comptition/comptition"
import Weekly from "../../components/weekly/weekly"
import Super from "../../components/super/super"
import Info from "../../components/info/info"
// import { useNavigate } from "react-router-dom"


const Explore=()=>{
    // const history=useNavigate()
    const [header,setHeader]=useState({})
    const [list,setList]=useState([])

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
            setHeader(result[1].header)
            setList(result[1].list)
    })
        .catch(error => {
            // history('/login')
            console.log('error', error)
        });
        })

    return(
        <div className="explore">
            <div style={{width:'100%',padding:"20px",display:'flex',justifyContent:"space-between",alignItems:'center'}}>
                <Search/>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'20%'}}>
                    <button><img src={bell} alt="notification"/></button>
                    <button><img src={email} alt="email"/></button>
                </div>
            </div>

            <Navigation/>


            <div className="content">
                <Info/>
                <div className="Courses">
                    <div className="head">
                    <h3>{header.title}</h3>
                    <a href="/">{header.moreTitle}</a>
                    </div>
                    <div className="course-item">
                    {list.map((n,index)=>{
                    return(<div className="item" key={index}>
                        <img src={`https://techwich.co${n.icon}`} alt=""/>
                        <div>
                        <p>{n.category.categoryName}</p>
                        <h4>{n.title}</h4>
                        <div className="leson">
                        <p>lesson Completed</p>
                        <p className="count-lesson">{n.lessonCompleted}/{n.lessonCount}</p>
                        </div>
                        <div>
                            <div className="progress">
                                <div className="bar" style={{width:`${n.percentage}%`}}>
                                    <span className="percentage" style={{left:`${n.percentage}%`}}>{n.percentage}%</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>) 
                   })}
                    </div>
                </div>


                   <Challange/>
                   <Comptition/>
                   <Weekly/>
                   <Super/>
                   <div className="space"></div>
            </div>
        </div>
    )
}

export default Explore


