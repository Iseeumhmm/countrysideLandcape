import React from 'react'
import { useRouteData } from 'react-static'


const Services = () => {
    const pageImages = useRouteData()
    return (
    <div style={{textAlign: 'center'}}>
        <h1>{pageImages[0]}</h1>
        <p style={{  textTransform: 'capitalize' }}>{pageImages[0]} Gallery coming soon</p>
    </div>
    )

}

export default Services