import React from 'react';
var today= new Date();

function Footer(){
    return (<div className='bottom'>
    <p>{today.getFullYear()}</p>
    </div>);
};

export default Footer;