import { Link, useParams } from 'react-router-dom'
import './solutions.css'
import { useEffect, useState } from 'react';


export default function SolarESSCS() {

    let {id} = useParams();

    const [solution, setSolution]=useState([]);
    const [solutionfeatures, setSolutionfeatures]=useState([]);
    const [relatedproducts, setRelatedproducts]=useState([]);
    const [com, setCompany]=useState([]);

    useEffect(()=>{
        const getSolution= ()=>{
            fetch(`http://127.0.0.1:8000/api/solution/${id}`)
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setSolution(response.solution)
                setSolutionfeatures(response.solution_features)
                setRelatedproducts(response.related_products)
                setCompany(response.com)
            })
            .catch(error=>{console.log(error)});
        }

        getSolution();
    },[]);
    return(
        <>
            <div className="headImgS" />
            <div className="imgInfoS">
                <h1>{solution.solution_name}</h1>
                <h3>{com.company_trademark} Solutions</h3>
            </div>
            <div className="solDetails">
                <h1>{solution.solution_heading1}</h1>
                <p>{solution.solution_description1}</p>
                <p>{solution.solution_description2}</p>
                <p>{solution.solution_description3}</p>
                <p>{solution.solution_description4}</p>
                <p>{solution.solution_description5}</p>
            </div>
            <img src="https://www.popsci.com/uploads/2021/01/28/WQKERORDUVB2LNCQTE4S5IVNSE-1536x1152.jpg" alt="" className="imgDetail" />
            <div className="graph">
                <h1>System <div className="blu">Schematic</div></h1>  
                <img src="https://www.tbbpowermobile.com/getFile/profile/upload/2023/01/04/%E8%B5%84%E6%BA%90%204_20230104011119A013.png" alt="" className="graphImg" />
            </div>
            <div className="highlights">
                <div className="features">
                    <img src="https://www.tbbpowermobile.com/getFile/profile/upload/2023/01/03/%E7%89%B9%E7%82%B9%E9%85%8D%E5%9B%BE_20230103085240A004.png" alt="" className="imgFeature" />
                    <div className="listS">
                        <h1>System Feature<div className='blu'> Highlights</div></h1>
                        <ul>
                        {solutionfeatures.length > 0 && solutionfeatures.map(solutionfeature => (
                            <li>{solutionfeature.feature}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="productListContentS">
                <ul className="productListMainS">
                    {relatedproducts.length > 0 && relatedproducts.map(relatedproduct => (
                    <li className='product'>
                        <Link to={`/SingleProduct/${relatedproduct.product_id}`} className="productListImgS">
                            <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitleS">{relatedproduct.product_name}</h3>
                        <p className="productListInfoS">{relatedproduct.product_description1}<br /></p>
                        <a href={`/SingleProduct/${relatedproduct.product_id}`} className="productListLinkS">Details→ </a>
                    </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}