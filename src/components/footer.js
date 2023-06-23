import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {

  const [productcategories, setCategories]=useState([]);
    const [solutions, setSolution]=useState([]);
    const [com, setCompany]=useState([]);

    useEffect(()=>{
        const getCategories= ()=>{
            fetch("http://127.0.0.1:8000/api/home")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setCategories(response.categories)
                setSolution(response.solutions)
                setCompany(response.com)
            })
            .catch(error=>{console.log(error)});
        }

        getCategories();
    },[]);

  return (
    <>
      <div className="footer">
        <div className="contact">
          <div className="footerLogo">
            <img src={require('../resources/img/betaLight.png')} alt="Beta+" />
          </div>
          <div className="contactInfo">
            <h2>{com.company_name}</h2>
            <h3>Add: {com.company_address}</h3>
            <h4>{com.company_mail}</h4>
          </div>
          <div className="socialmedia">
            <Link to="https://www.linkedin.com/company/beta-ess-li-ion-batteries"><img src={require('../resources/img/linkedin.png')} alt="LinkedIn" className='smlogo' /></Link>
            <Link to="/"><img src={require('../resources/img/facebook.png')} alt="Facebook" className='smlogo'  /></Link>
            <Link to="/"><img src={require('../resources/img/twitter.png')} alt="Twitter" className='smlogo'  /></Link>
            <Link to="/"><img src={require('../resources/img/youtube.png')} alt="Youtube"  className='smlogo' /></Link> 
          </div>
        </div>
        <div className="footerLinks">
          <div className="footerNav">
            <Link to="/" className='footerNavLinks'>Home</Link>
            <Link to="/Download" className='footerNavLinks'>Downloads</Link>
            <Link to="/" className='footerNavLinks'>Blog</Link>
            <Link to="/aboutUs" className='footerNavLinks'>About us</Link>
            <Link to="/contactUs" className='footerNavLinks'>Contact us</Link>
          </div>
          <div className="footerPS">
            <ul className='footerSolutions'><Link to="/SolarESSCS" className='footerSolutionsLinkS'>Solutions</Link>
            {solutions.map((item) => (
              <li><Link to={`/Solution/${item.solution_id}`} className='footerSolutionsLink'>{item.solution_name}</Link></li>
            ))}
            </ul>
            <ul className='footerProducts'><Link to="/Product" className='footerSolutionsLinkP'>Products</Link>
            {productcategories.map((item) => (
              <li><Link to={`/Product/${item.category_id}`} className='footerSolutionsLink'>{item.category_name}</Link></li>
            ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2007-2023 Shenzhen Beta Technology Co., Ltd.</p>
      </div>
    </>
  );
};

export default Footer;
