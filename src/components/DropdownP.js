import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './DropdownP.css'

function DropdownP() {


    const [productcategories, setCategories]=useState([]);

    useEffect(()=>{
        const getCategories= ()=>{
            fetch("http://127.0.0.1:8000/api/home")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setCategories(response.categories)
            })
            .catch(error=>{console.log(error)});
        }

        getCategories();
    },[]);

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menuP clicked' : 'dropdown-menuP'}>
            {productcategories.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className="dropdown-link" to={`/Product/${item.category_id}`} onClick={() => setClick(false)}>
                            <div className="navbarImg">
                            <img src={require(`../resources/img/${item.category_image}`)} alt="React Logo" />
                            </div>
                            <h1>{item.category_name}</h1>
                            <h4>{item.category_description}</h4>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
    
export default DropdownP;