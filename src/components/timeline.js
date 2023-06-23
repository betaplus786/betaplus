import React, { useEffect,useState } from 'react';
import WOW from 'wowjs';
import './timeline.css'; // Import your CSS file


function Timeline() {

  const [companypath, setCompany]=useState([]);
  const [time, setTime]=useState([]);

    useEffect(()=>{
        const getCompany= ()=>{
            fetch("http://127.0.0.1:8000/api/companydevelopmentpath")
            .then(res=>{ return res.json()})
            .then(response=>{
                console.log(response)
                setCompany(response.path)
                setTime(response.timeperiod)
            })
            .catch(error=>{console.log(error)});
        }

        getCompany();
    },[]);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
  <>
    <div className="timelineCover">
      <div className="timelineHead">
        <h1>Development <span className='Imp'>Path</span></h1>
        {time.map((item) => (
        <h3>{item.min}-{item.max}</h3>
        ))}
      </div>
      <div className="timeline-container">
        <div className="timeline">
          {companypath.map((item, index) => (
            <div className={`timeline-item`}  key={index}>
              <div className="timeline-content">
                <h1>{item.year}</h1>
                <div className="timelineLine" >&nbsp;&nbsp;</div>
                <h2>{item.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
} 

export default Timeline;
