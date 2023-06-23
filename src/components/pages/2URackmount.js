import React from 'react';
import './productpage.css';
import { Link, useParams } from 'react-router-dom';
import DetailsThumb from '../DetailsThumb';
import { scrollToSection } from './scrollToSection';

class twoURackmount extends React.Component{

  state = {
    src: [
      'https://i.ibb.co/RQJnHhm/image.png',
      'https://i.ibb.co/MGKCzSX/47-3.png',
      'https://i.ibb.co/HX1MZcq/product.png',
      'https://i.ibb.co/MGKCzSX/47-3.png'
    ],
    index: 0
  };
  
  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active"; 
  };

  state = {
    product: [],
    features: [],
    documents: [],
    error: false
 };

 componentDidMount() {

    // const {index} = this.state;
    // this.myRef.current.children[index].className = "active";
    this.getProduct();
 }

 getProduct = async () => {
     try {
         const response = await fetch(`http://127.0.0.1:8000/api/singleproduct/1`);
         if (response.ok) {
             const data = await response.json();
             this.setState({ product: data.product});
             this.setState({ features: data.features});
             this.setState({ documents: data.documents});
         } else { this.setState({ error: true }) }
     } catch (e) {
 this.setState({ error: true });
}
};

  render(){
    const {product,features,documents,src, index} = this.state;
    return(
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

          </table>
        </div>
    </div>
    </>
    );
  };
}

export default twoURackmount;
