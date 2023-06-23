import './Pages.css'
import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {

    const [blog, setBlog]=useState([]);

    useEffect(()=>{
        const getBlog= ()=>{
            fetch("http://127.0.0.1:8000/api/blog")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setBlog(response)
            })
            .catch(error=>{console.log(error)});
        }

        getBlog();
    },[]);

        const [activeButton, setActiveButton] = useState(1);
      
        const handleButtonClick = (buttonNumber) => {
          setActiveButton(buttonNumber);
        };
    return(
        <>
        <div className="headImgB" />
            <div className="imgInfoB">
                <h1>Blog</h1>
                <h3>BETA+ News and Blogs</h3>
            </div>
            <div className='filterB'>
                <button
                    className={activeButton === 1 ? 'active-button' : 'inactive-button'}
                    onClick={() => handleButtonClick(1)}>
                    Blog
                </button>
                <button
                    className={activeButton === 2 ? 'active-button' : 'inactive-button'}
                    onClick={() => handleButtonClick(2)}>
                    News
                </button>
                <button
                    className={activeButton === 3 ? 'active-button' : 'inactive-button'}
                    onClick={() => handleButtonClick(3)}>
                    Exibition
                </button>
            </div>
        <div className="blogContainer">
            {
                blog.map((b)=>{
                    if(activeButton=== 1 && b.type === '1'){
                        return(
                            <div className="blog">
                                
                            <Link to={`${b.link}`}>
                                <div className="blogImage"><img src={b.image} alt="Title" /></div>
                                <div className="blogData">
                                    <h2>{b.blog_heading}</h2>
                                    <h4>{b.blog_descrption}</h4>
                                    <h5>{b.created_at}</h5>
                                </div>
                                <h2 className="blogArrow">→</h2>
                            </Link>                                
                            </div>
                        )
                    }
                    else if(activeButton=== 2 && b.type === '2'){
                        return(
                            <div className="blog">
                            <Link to={`${b.link}`}>
                                <div className="blogImage"><img src={b.image} alt="Title" /></div>
                                <div className="blogData">
                                    <h2>{b.blog_heading}</h2>
                                    <h4>{b.blog_descrption}</h4>
                                    <h5>{b.created_at}</h5>
                                </div>
                                <h2 className="blogArrow">→</h2>
                            </Link> 
                            </div>
                        )
                    }
                    else if(activeButton=== 3 && b.type === '3'){
                        return(
                            <div className="blog">
                            <Link to={`${b.link}`}>
                                <div className="blogImage"><img src={b.image} alt="Title" /></div>
                                <div className="blogData">
                                    <h2>{b.blog_heading}</h2>
                                    <h4>{b.blog_descrption}</h4>
                                    <h5>{b.created_at}</h5>
                                </div>
                                <h2 className="blogArrow">→</h2>
                            </Link> 
                            </div>
                        )
                    }
            })
            }
            
        </div>    

        </>
    )
}