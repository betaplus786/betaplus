import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import './productpage.css'
import { useEffect, useState } from 'react'
import { scrollToSection } from './scrollToSection';

export default function SinglrProduct() {

    let {id} = useParams();

    const [product, setProduct]=useState([]);
    const [features, setFeatures]=useState([]);
    const [documents, setDocuments]=useState([]);

    useEffect(()=>{
        const getProduct= ()=>{
            fetch(`http://127.0.0.1:8000/api/singleproduct/${id}}`)
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setProduct(response.product)
                setFeatures(response.features)
                setDocuments(response.documents)
            })
            .catch(error=>{console.log(error)});
        }

        getProduct();
    },[]);
  return (
    <>
    <div className="app">
            <div className="details">
              <div className="big-img">
                <img src="https://i.ibb.co/RQJnHhm/image.png" alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.product_name}</h2>
                </div>
                <p>{product.product_heading1}</p>
                <p>{product.product_heading2}</p>
                <p>{product.product_heading3}</p>
                <p>{product.product_description1}</p>

                {/* <DetailsThumb images={src} tab={this.handleTab} myRef={this.myRef} /> */}
                <button className='btn scroll-button' onClick={scrollToSection}>Download→ </button>
              <button className='btn'><Link to='./contactUs' className='Links'>Contact Us→ </Link></button>
              </div>
            </div>
      </div>
      <div className="function">
        <h1>Features</h1>
        <ul>
        {features.length > 0 && features.map(feature => (
          <li>{feature.product_feature}</li>
        ))
        }
        </ul>
      </div>
      <div className="section" id="scroll-section">
        <h2>Downloads</h2>
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
            {documents.length > 0 && documents.map(document => (
              <tr>
                <td>{document.document_name}</td>
                <td>{document.document_type}</td>
                <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            ))
            }
          </tbody>
            {/* this is a test comment */}
          </table>
        </div>
    </div>
     </>
  )
}
