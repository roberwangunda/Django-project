import React from 'react'

const ServiceList = (props) => {
    const { name, description, get_image} = props.item;
    return (
        <>
            <div>
                <h1></h1>
                <img src={get_image} alt="Ideals Services" className="about-images"></img>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}

export default ServiceList;