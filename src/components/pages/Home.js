import '../../App.css';
import './Pages.css'
import ImageSlider from '../imageSlider'
import CounterUp from '../CounterUp'
import Profile from '../profile';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../timeline';

function Home() {

    const [productcategories, setCategories]=useState([]);
    const [solutions, setSolution]=useState([]);

    useEffect(()=>{
        const getCategories= ()=>{
            fetch("http://127.0.0.1:8000/api/home")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setCategories(response.categories)
                setSolution(response.solutions)
            })
            .catch(error=>{console.log(error)});
        }

        getCategories();
    },[]);
    const images = [
        require('../../resources/img/Slider1.png'),
        require('../../resources/img/Slider2.png'),
        require('../../resources/img/Slider3.png')
    ];
    const [activeOption, setActiveOption] = useState('option0');

    const handleOptionClick = (option) => {
      setActiveOption(option);
    };  

    return (  
        <>
            <div>
            <ImageSlider images={images} />
            </div>
            <CounterUp />
            <Profile />
            <div className="bg"></div>
            <Timeline />
            <div className="productSeries">
                <div className="headPS">
                <h1>Product <span className='imp'>Series</span></h1>
                <p>Wide Range of Slim Series of Energy Storage Systems. </p>
                </div>
                <div  className="itemsPS">
                {
                    productcategories.map(data=>(
                     
                        <Link to={`/Product/${data.category_id}`}  className="itemPS">
                            <img src={require(`../../resources/img/${data.category_image}`)} alt="Product" className="imgPS" />
                            <h3>{data.category_name}</h3>
                            <p>→</p>
                        </Link>   
                    ))
                }
                </div>
            </div>
            <div className="homeSol">
                <div className="container">
                    <div className="options">
                    {
                        solutions.map((data,index)=>(
                        <div
                        className={`option ${activeOption === `option${index}` ? 'active' : ''}`}
                        onClick={() => handleOptionClick(`option${index}`)}
                        >
                            {data.solution_name}
                        </div>
                        ))
                    }
                    </div>
                    <div className="content"> 
                    {
                    solutions.map((data,index)=>( 

                        <div className='activeoption'>
                        { activeOption===`option${index}` &&
                        <div className="slide">
                            <div className="text">
                            <h1>{data.solution_name}</h1>
                            <h2>{data.solution_heading1}</h2>
                            <p>{data.solution_description1}</p><br></br>
                            <a className='btn' href={`/Solution/${data.solution_id}`}>Check→</a>
                            </div>
                            <div className="image">
                            <img src={require('../../resources/img/isecs.jpg')} alt=" 1" />
                            </div>
                        </div>
                        }
                        </div>
                        ))
                    }
                    </div>
                    </div>
                </div>
                <div className="coperativePartners">
                    <div className="CPHeader">
                        <h1>Cooperative Partners</h1>
                    </div>
                    <div className="CPBody">
                        <div className="CPLine">
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/a4/1c1163f40480416691a751a3945ade.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GoodWe" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/55/53203bd0f867fce03282099bc84fc7.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="SunGrow" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/ab/c478fab7d465a0cf4dad05a31b4081.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Deye" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/b8/e97017323163fcaf0599b8b2aa125c.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GrowWatt" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/90/4c7f919c18cb938a158d70b86e3709.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Victron Energey" />
                        </div>
                        </div>
                        <div className="CPLine">
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/4d/a41221233799bc771627ec4f6a84dd.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GanFeng Lithem" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/06/612a0e507f1741ece0f1a006457351.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Gorion HighTech" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/dd/5ef8064bbbe004f2e1ef7a71388f18.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="CATL" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/b7/42901e11b5a49f5df0caf90536220c.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="EVE" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/96/64a858d91677d14f4ce372f9b74183.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="BYD" />
                        </div>
                        </div>  
                    </div>
                </div>
                <div className="LPDownload">
                    <h1>Download</h1>
                    <h3>Sufficient Productline to meet RV needs</h3>
                    <div className='LPSerach'>
                        <input type="text" className='LPSearchBar' placeholder='Please enter your search'/>
                        <button className='LPButton'>Search</button>
                    </div>
                    <div className="downloadShortCut">
                        <Link to="/Download" className="shtcut">
                            <div className="brochure" />
                            <p>Brochure</p>
                        </Link>
                        <Link to="/Download" className="shtcut">
                        <div className="datasheet" />
                            <p>DataSheet</p>
                        </Link>
                        <Link to="/Download" className="shtcut">
                        <div className="manual" />
                            <p>Manuals</p>
                        </Link>
                        <Link to="/Download" className="shtcut">
                        <div className="certificate" />
                            <p>Certificates</p>
                        </Link>
                    </div>
                </div>
        </>
    )
}
export default Home;






