
import { useEffect, useState } from 'react';
import './contactUs.css';

export default function ContactUs() {
    const [companyinfo, setCompany]=useState([]);

    useEffect(()=>{
        const getCompany= ()=>{
            fetch("http://127.0.0.1:8000/api/contactus")
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
            <div className="mapArea">
                <div className="adress">
                    <h2><div className="imp">Main</div> Office</h2>
                    <h3>{companyinfo.company_trademark}</h3>
                    <p>Add ：{companyinfo.company_address}</p>
                    <p>Mail:{companyinfo.company_mail}</p>
                    <p>Phone:{companyinfo.company_phone}</p>
                    </div>
                <div className="mapContainer">
                <iframe
                    title='BETA+'
                    src={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3680.196088591391!2d114.26607371070583!3d22.720951927431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzE1LjQiTiAxMTTCsDE2JzA3LjIiRQ!5e0!3m2!1sen!2s!4v1686724875716!5m2!1sen!2s'}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="marketsContainer">
            <div className='markets'>
                <h2><div className="imp">European</div>Market</h2>
                <p className="mail">sales@a-beta.net</p>
                <p className="mail">vp@a-beta.net</p>
            </div>
            <div className="markets">
                <h2><div className="imp">US </div> Market</h2>
                <p className="mail">sales@a-beta.net</p>
                <p className="mail">vp@a-beta.net</p>
            </div>
            </div>
            <div className="message">
                <h1>Online Message</h1>
                <div className="form-container">
                <div className="form-row">
                    <input type="text"  className="name" name="name" placeholder="Name" required />
                    <input type="tel"  className="phone" name="phone" placeholder="Phone" required />
                </div>
                <div className="form-row">
                    <input type="email"  className="email" name="email" placeholder="E-Mail" required />
                </div>
                <div className="form-row">
                    <textarea  className="content" name="content" rows="4" required placeholder="Content"></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
                </div>

            </div>
        </>
    )
}