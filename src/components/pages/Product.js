import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import './product.css'
import { useEffect, useState } from 'react'

export default function Product() {

    let {id} = useParams();

    const [products, setProduct]=useState([]);
    const [category, setCategory]=useState([]);

    useEffect(()=>{
        const getProduct= ()=>{
            fetch(`http://127.0.0.1:8000/api/products/${id}}`)
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setProduct(response.products)
                setCategory(response.category)
            })
            .catch(error=>{console.log(error)});
        }

        getProduct();
    },[]);
  return (
    <>
    <div className='whole'>
        <img src="https://wallpaperaccess.com/full/4205666.jpg" alt="Product Poster" />
        <h1 className='productHeadline'>Our Latest</h1>  <br /> 
        <h1 className='productHeadline productHeadlineBig'>Inovations</h1>
        <h1 className='heading'>{category.category_name}</h1>
        <div className="productList">
            <div className="productListContent">
                <ul className="productListMain">
                    {
                        products.map(data=>(
                        <li className='product'>
                            <Link to={`/SingleProduct/${data.product_id}`} className="productListImg">
                                <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product Name" />
                            </Link>
                            <h3 className="productListTitle">{data.product_name}</h3>
                            <p className="productListInfo">{data.product_description1}<br /></p>
                            <a href={`/SingleProduct/${data.product_id}`} className="productListLink">Details→ </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
     </>
  )
}
