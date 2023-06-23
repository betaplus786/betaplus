import { Link } from 'react-router-dom';
import './download.css';
import { useEffect, useState } from 'react';

export default function Download() {

    const [download, setDownload]=useState([]);

    useEffect(()=>{
        const getDownload= ()=>{
            fetch("http://127.0.0.1:8000/api/download")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setDownload(response)
            })
            .catch(error=>{console.log(error)});
        }

        getDownload();
    },[]);

    const [activeItem, setActiveItem] = useState('d');

    const handleClick = (item) => {
      setActiveItem(item);
    };
    return(
        <>
            <div className="headImg" />
            <div className="imgInfo">
                <h1>Downloads</h1>
                <h3>Enter what you want help with</h3>
            </div>
            <div className="search">
                <h1>Filter</h1><div className="spaceBtw" />
                <input type="text" className="searchBox" id="searchBox" placeholder='Please eneter your search'/>
                <button className="searchBtns"> &nbsp;Search&nbsp; </button>
            </div>
            <div className="filter">        
                <ul>
                <li className={activeItem === 'Brochure' ? 'active' : ''} onClick={() => handleClick('Brochure')}>
                    <span className='filterBtn'>Brochure</span>
                </li>
                <li className={activeItem === 'Datasheet' ? 'active' : ''} onClick={() => handleClick('Datasheet')}>
                    <span className='filterBtn'>Datasheet</span>
                </li>
                <li className={activeItem === 'Certificates' ? 'active' : ''} onClick={() => handleClick('Certificates')}>
                    <span className='filterBtn'>Certificates</span>
                </li>
                <li className={activeItem === 'Manuals' ? 'active' : ''} onClick={() => handleClick('Manuals')}>
                    <span className='filterBtn'>Manuals</span>
                </li>
                </ul>
            </div>
            <div className="section">
        <h2 className='dHead'>Downloads</h2>
        <div className="table">
          <table>
            <thead>
                <tr>
                <th>File Name</th>
                <th>Document Type</th>
                <th>Download</th>
                </tr>
            </thead>
            <tbody>
                {
                download.map((d,index)=>{
                    if(activeItem==='d'){
                        return (
                        <tr>
                            <td>{d.document_name}</td>
                            <td>{d.document_type}</td>
                            <td>
                            <Link to="/" className="icon-f"></Link>
                            <Link to="/" className="icon-d"></Link>
                            </td>
                        </tr>
                        );
                    }else if(activeItem==='Brochure' && d.document_type=== 'Brochure'){
                        return (
                            <tr>
                                <td>{d.document_name}</td>
                                <td>{d.document_type}</td>
                                <td>
                                <Link to="/" className="icon-f"></Link>
                                <Link to="/" className="icon-d"></Link>
                                </td>
                            </tr>
                            );
                    }
                    else if(activeItem==='Datasheet' && d.document_type=== 'Datasheet'){
                        return (
                            <tr>
                                <td>{d.document_name}</td>
                                <td>{d.document_type}</td>
                                <td>
                                <Link to="/" className="icon-f"></Link>
                                <Link to="/" className="icon-d"></Link>
                                </td>
                            </tr>
                            );
                    }
                    else if(activeItem==='Certificates' && d.document_type=== 'Certificates'){
                        return (
                            <tr>
                                <td>{d.document_name}</td>
                                <td>{d.document_type}</td>
                                <td>
                                <Link to="/" className="icon-f"></Link>
                                <Link to="/" className="icon-d"></Link>
                                </td>
                            </tr>
                            );
                    }
                    else if(activeItem==='Manuals' && d.document_type=== 'Manuals'){
                        return (
                            <tr>
                                <td>{d.document_name}</td>
                                <td>{d.document_type}</td>
                                <td>
                                <Link to="/" className="icon-f"></Link>
                                <Link to="/" className="icon-d"></Link>
                                </td>
                            </tr>
                            );
                    }
                    
                    })
                }
          </tbody>

          </table>
        </div>
    </div>
        </>
    )
}