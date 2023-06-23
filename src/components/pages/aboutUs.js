import './aboutUs.css'
import { useEffect, useState } from 'react';

export default function AboutUs() {

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

    return(
        <>
            <div className="headImg" />
            <div className="imgInfo">
                <h1>About Us</h1>
                <h3>{companyinfo.company_tag_line}</h3>
            </div>
            <div className="companyIntro">
                <h1>{companyinfo.company_trademark} <div className="imp">Introduction</div></h1>
                <p className='companyData'>{companyinfo.company_intro}</p>
                <p className='companyData'>{companyinfo.company_intro2}</p>
            <img src="https://www.tbbpowermobile.com/_nuxt/img/about_us_company.599859d.png" alt="Informative Img" className="infoImg" />
            </div>
            <div className="headImg" />
            <div className="imgClient">
                <h1>Bulid with Client</h1>
                <h3>{companyinfo.company_trademark} Power Mobile</h3>
            </div>
            <div className="contactForm">
            <div className="adressAU">
                    <h2>Contact<div className="imp">Us</div></h2>
                    <h3>{companyinfo.company_trademark}</h3>
                    <p>Mail:{companyinfo.company_mail}</p>
                    <p>Phone:{companyinfo.company_phone}</p>
            </div>
            <div className="messageAU">
                <div className="form-container">
                <div className="form-row">
                    <input type="text"  className="nameAU" name="name" placeholder="Name:" required />
                    <input type="tel"  className="phoneAU" name="phone" placeholder="Phone:" required />
                    <input type="email"  className="emailAU" name="email" placeholder="E-Mail:" required />
                </div>
                <div className="form-row">
                    <textarea  className="contentAU" name="content" rows="4" required placeholder="Content:"></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
                </div>

            </div>
            </div>
        </>
    )
}