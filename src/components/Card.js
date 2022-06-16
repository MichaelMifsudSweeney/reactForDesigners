import React from 'react'

const Card = props => (
    <div className='Card'>
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default``