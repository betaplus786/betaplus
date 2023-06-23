import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './CounterUp.css'

const CounterUp = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(true)}>
        <div className={'CounterUpContainer'}>
        <div className='counter'>
        {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}<p className='symbol'>+</p><br/><p className='details'>Years of Experience</p>   
        </div>
        <div className='counter'>
        {counterOn && <CountUp start={0} end={500} duration={3} delay={0} />}K<p className='symbol'>+</p><br/><p className='details'>Global Installation</p>   
        </div>
        <div className='counter'>
        {counterOn && <CountUp start={0} end={200} duration={3} delay={0} />}<p className='symbol'>+</p><br/><p className='details'>R&D Engineers</p>   
        </div>
        <div className='counter'>
        {counterOn && <CountUp start={0} end={200} duration={3} delay={0} />}<p className='symbol'>+</p><br/><p className='details'>Patent & Copy Rights</p>   
        </div>
        </div>
        </ScrollTrigger>
        
        ); 
}

export default CounterUp