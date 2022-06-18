import React from 'react';

function Card(prop){
    return (<div className='card'>
         <div className='top'>
         <h1 className='name'>{prop.name}</h1>
         <img className='img circle-img' src={prop.imgName} />
        </div>
        <div className='bottom'>
        <p className='info'>{prop.phone}</p>
        <p className='info'>{prop.email}</p>
        </div>
    </div>);
};

export default Card;