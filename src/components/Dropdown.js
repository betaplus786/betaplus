import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

function Dropdown() {

    const [solutions, setSolution]=useState([]);

    useEffect(()=>{
        const getCategories= ()=>{
            fetch("http://127.0.0.1:8000/api/home")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setSolution(response.solutions)
            })
            .catch(error=>{console.log(error)});
        }

        getCategories();
    },[]);

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {solutions.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className="dropdown-link" to={`/Solution/${item.solution_id}`} onClick={() => setClick(false)}>
                            <h1>{item.solution_name}</h1>
                            <h3>{item.solution_name_description1}</h3>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </> 
    )
}
     
export default Dropdown;