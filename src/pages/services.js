import React from 'react'
import { useRouteData } from 'react-static'


const Services = () => {
    const images = useRouteData()
    return (
    <div style={{textAlign: 'center'}}>
        <h1>{images[0]}</h1>
        <p style={{  textTransform: 'capitalize' }}>{images[0]} Gallery coming soon</p>
    </div>
    )

}

export default Services