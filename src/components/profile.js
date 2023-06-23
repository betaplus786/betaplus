import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

const Profile = () => {

  const [companyinfo, setCompany]=useState([]);

    useEffect(()=>{
        const getCompany= ()=>{
            fetch("http://127.0.0.1:8000/api/aboutus")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setCompany(response)
            })
            .catch(error=>{console.log(error)});
        }

        getCompany();
    },[]);

    useEffect(() => {
      const wow = new WOW.WOW();
      wow.init();
    }, []);
  
    return (
        <div className='profile'>
            <h2 className='head'>Company Profile</h2><br />
            <h4>{companyinfo.company_trademark}</h4>
            <div className='data-container wow fadeInRightBig' data-wow-duration="1.75s">   
            <h3>{companyinfo.company_name}</h3>         
            <p className='profile-data'>{companyinfo.company_intro}</p>
            <Link to='/aboutUs' className='profile-btn'>Learn More</Link>
            </div>
            <div className='video wow fadeInLeft' data-wow-duration="1.75s" data-wow-delay="0.25s"> 
            </div>
            </div>
    );
  }
  export default Profile