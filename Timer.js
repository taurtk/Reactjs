import React, { useEffect, useState } from 'react'

function Timer() {

    const [minutes, setminutes] = useState(0)
    const [hour,sethour] =  useState(0)

    var timer;

    useEffect (()=>{

        timer = setInterval(()=>{
            setminutes(minutes+1);
            if(minutes === 59)
            {
                sethour(hour+1);
                setminutes(0);
            }
        },10000)

    return ()=> clearInterval(timer);
    })

  return (
    <div className='timer'>
        <div className='container'>
           <div className='timer_container'>
            <h1>Timer</h1>
            <h1>{hour}:{minutes}</h1>
           </div>

        </div>
      
    </div>
  )
}

export default Timer
