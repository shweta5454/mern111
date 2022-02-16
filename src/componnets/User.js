import React, { useEffect,useState } from 'react'
import  { useLocation} from 'react-router-dom'
import '../style/user.css'
import vector from '../style/figmaimages/arr.jpg'
import light from '../style/figmaimages/light.jpg'
import comment from '../style/figmaimages/comment.jpg'
import elipse from '../style/figmaimages/Ellipse 4.svg'
import vector1 from '../style/figmaimages/Vector.svg'


export default function User() {

    useEffect(
        ()=>{
                return ()=>{
                    
                    console.log("i am unmoiunting");}
        },[]
    )
    let search=useLocation().search;
    const user=new URLSearchParams(search).get('user');
    const username=new URLSearchParams(search).get('username');
    // valuation
     const[Lead,setLead]=useState(100);
     const[Netcoin,setNetcoin]=useState(1100);
     const[Grosscoin,setGrossCoin]=useState(2100);
     
     //  time section
     let time=new Date().toLocaleTimeString();
     const[ctime,settime]=useState(time)
     const UpdatedTime=()=>{
         let time=new Date().toLocaleTimeString();
            settime(time)
    }
    setInterval(UpdatedTime,1000)


     const valuation=()=>{
    console.log(Lead);
    let total=Netcoin+Lead;
    console.log(Netcoin)
    setNetcoin(total);
    console.log(Netcoin)
    
    let gross=total+Grosscoin;
    console.log(setGrossCoin(gross))
    console.log(gross)
    
    }


  return (
    // <div className='bg'>
    //     <button>Gross coins</button>
    //     <button>Netlead</button>
    //     <button onClick={valuation}>Lead</button>

    //     <h1>{ctime}</h1>


    // </div>
<div className="container-sm ">
            <div className="row ">
                <div className="col-6 ">
                    {/* <!-- user section --> */}
                    <div className="row">
                        <div className="col-2  imgstyle">
                        </div> 
                        <div className="col-10 ">
                           <h6 className="usertypo">{user}</h6>
                           <p className="datetypo">6 June 2021, 12:10 pm</p>

                        </div>
                    </div>
                </div>

                <div className="col-4 ">
                    {/* <!-- Grooss coin section --> */}
                    <div className="row ">
                        <div className="col d-flex justify-content-end ">
                            <img src={elipse} alt="" />
                            <pre className="usertypo">{Grosscoin}</pre>
                        </div>
                    </div>
                   
                   
                   
                    <div className="row  "> <div className="col-12 datetypo text-end ">Groos Coins</div> </div>
                </div>

                <div className="col-1  arrowimg p-2"></div>
                <div className="col-1 threedot" >
                </div>
            </div>

            {/* <!-- main image section --> */}
            <div className="row ">
                    <div className="col-12 mainimg">

                    </div>
            </div>

            {/* <!-- lead coin section --> */}
            <div className="row justify-content-start">
                <div className="col-6  justify-content-start">
                    <img src={light} className="m-0 lightstyle"/>
                    <img src={comment} className="m-1"/>
                    <img src={vector} className="m-1"/>

                    <h6>50 interested</h6>

                </div>
                <div className="col-6 ">
                <button className="lead" onClick={valuation}>Lead +100<img src={elipse} alt="" s rcset=""/></button>
                </div>
            </div>

            {/* <!-- counter section --> */}
            <div className="row">
                <div className="col-2 userimg "></div>
                <div className="col-5 ">
                <div className="row ">
                <div className="col d-flex justify-content-start">
                    <img src={elipse} alt="" />
                    <pre className="usertypo">{Netcoin}</pre>
                    <img src={vector1} alt=""/>
                </div>
                </div>    
                <div className="row">
                       <div className="col-4 usertypo">{username}</div> 
                       <div className="col-8 datetypo text-start mt-1">In Lead</div> 
                </div>    
                </div>


                <div className="col-5  text-end">
                    <span>{ctime}</span>
                </div>
            </div>

            {/* <!-- Footer--> */}
            <div className="row">
                <div className="col-12">
                    <h6 className="foottypo" > @alferdo r.. If everything seems under control, you're going fast enough. Be Fast, Be Curious..! 😎
                    </h6>
                </div>
            </div>

    </div>
    
  )
}
